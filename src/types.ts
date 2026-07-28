export interface DrinkProduct {
  id: string;
  name: string;
  category: 'coffee' | 'non-coffee' | 'boba-series' | 'refreshing';
  categoryLabel: string;
  price: string;
  hpp: string; // Harga Pokok Penjualan
  profitMargin: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageSrc?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  flavorNotes: string[];
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name reference
  highlightText: string;
}

export interface FranchisePackage {
  id: string;
  name: string;
  badge: string;
  priceFormatted: string;
  priceNumeric: number;
  originalPrice: string;
  estimateRoi: string;
  targetSpace: string;
  image: string;
  popular?: boolean;
  description: string;
  includes: string[];
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  qualifications: string[];
  flyerImage?: string;
  benefits?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Outlet' | 'Produk' | 'Kemitraan' | 'Event';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  outletName: string;
  monthlyRevenue: string;
  quote: string;
  avatar: string;
}

export interface EmployeeTestimonial {
  id: string;
  name: string;
  role: string;
  years: string;
  image: string;
  quote: string;
  department?: string;
}

export interface ContactFormInput {
  name: string;
  whatsapp: string;
  city: string;
  packageInterest: string;
  message: string;
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role?: 'user' | 'partner' | 'admin';
  createdAt?: string;
}

export interface ConsultationRecord {
  id?: string;
  name: string;
  whatsapp: string;
  email: string;
  packageInterest: string;
  message?: string;
  status?: 'pending' | 'contacted' | 'resolved';
  createdAt?: string;
  updatedAt?: string;
}

export interface CareerApplicationRecord {
  id?: string;
  positionId?: string;
  positionTitle: string;
  applicantName: string;
  whatsapp: string;
  email: string;
  experience?: string;
  notes?: string;
  status?: 'received' | 'reviewing' | 'interview' | 'rejected';
  createdAt?: string;
}
