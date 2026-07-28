import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  getDocFromServer,
  setDoc,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import {
  OperationType,
  FirestoreErrorInfo,
  UserProfile,
  ConsultationRecord,
  CareerApplicationRecord
} from '../types';

// Initialize Firebase App
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// CRITICAL: Must pass firestoreDatabaseId
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Standard Error Handler conforming to skill guidelines
export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const currentUser = auth.currentUser;
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path,
    authInfo: {
      userId: currentUser?.uid || null,
      email: currentUser?.email || null,
      emailVerified: currentUser?.emailVerified || null,
      isAnonymous: currentUser?.isAnonymous || null,
      tenantId: currentUser?.tenantId || null,
      providerInfo: currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    }
  };
  console.error('Firestore Error:', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// CRITICAL CONSTRAINT: Test connection on app boot
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}
testConnection();

// --- Firestore CRUD Functions ---

// 1. Submit Consultation Request
export async function createConsultation(data: Omit<ConsultationRecord, 'id' | 'createdAt'>): Promise<string> {
  const collectionPath = 'consultations';
  try {
    const customDocId = `consult_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const docRef = doc(db, collectionPath, customDocId);
    
    await setDoc(docRef, {
      name: data.name,
      whatsapp: data.whatsapp,
      email: data.email,
      packageInterest: data.packageInterest,
      message: data.message || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    
    return docRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, collectionPath);
  }
}

// 2. Submit Career Application
export async function createCareerApplication(data: Omit<CareerApplicationRecord, 'id' | 'createdAt'>): Promise<string> {
  const collectionPath = 'careerApplications';
  try {
    const customDocId = `app_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const docRef = doc(db, collectionPath, customDocId);

    await setDoc(docRef, {
      positionTitle: data.positionTitle,
      applicantName: data.applicantName,
      whatsapp: data.whatsapp,
      email: data.email,
      experience: data.experience || '',
      notes: data.notes || '',
      status: 'received',
      createdAt: new Date().toISOString()
    });

    return docRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, collectionPath);
  }
}

// 3. User Profile Management
export async function syncUserProfile(user: User): Promise<UserProfile> {
  const path = `users/${user.uid}`;
  try {
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as UserProfile;
    } else {
      const isDefaultAdmin = user.email === 'lelimei88@gmail.com';
      const newProfile: UserProfile = {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || 'Mitra Hazna',
        photoURL: user.photoURL || '',
        role: isDefaultAdmin ? 'admin' : 'partner',
        createdAt: new Date().toISOString()
      };
      await setDoc(docRef, newProfile);
      return newProfile;
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

// 4. Fetch Consultations for Admin/Partner
export async function fetchConsultations(): Promise<ConsultationRecord[]> {
  const path = 'consultations';
  try {
    const q = query(collection(db, path), limit(50));
    const querySnapshot = await getDocs(q);
    const records: ConsultationRecord[] = [];
    querySnapshot.forEach((docSnap) => {
      records.push({ id: docSnap.id, ...docSnap.data() } as ConsultationRecord);
    });
    return records;
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
  }
}

// 5. Fetch Career Applications
export async function fetchCareerApplications(): Promise<CareerApplicationRecord[]> {
  const path = 'careerApplications';
  try {
    const q = query(collection(db, path), limit(50));
    const querySnapshot = await getDocs(q);
    const records: CareerApplicationRecord[] = [];
    querySnapshot.forEach((docSnap) => {
      records.push({ id: docSnap.id, ...docSnap.data() } as CareerApplicationRecord);
    });
    return records;
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
  }
}

// 6. Authentication Helpers
export async function loginWithGoogle() {
  return await signInWithPopup(auth, googleProvider);
}

export async function logoutFirebase() {
  return await signOut(auth);
}
