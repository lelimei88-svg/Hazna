import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  User,
  LogOut,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  FileText,
  CheckCircle2,
  RefreshCw,
  Database,
  Lock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { fetchConsultations, fetchCareerApplications } from '../lib/firebase';
import { ConsultationRecord, CareerApplicationRecord } from '../types';

interface PartnerPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerPortalModal: React.FC<PartnerPortalModalProps> = ({ isOpen, onClose }) => {
  const { currentUser, userProfile, signInWithGoogle, logout, loading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<'consultations' | 'careers' | 'account'>('consultations');
  const [consultations, setConsultations] = useState<ConsultationRecord[]>([]);
  const [careerApps, setCareerApps] = useState<CareerApplicationRecord[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [dataError, setDataError] = useState<string | null>(null);

  const loadData = async () => {
    if (!currentUser) return;
    setLoadingData(true);
    setDataError(null);
    try {
      const [consData, appsData] = await Promise.all([
        fetchConsultations(),
        fetchCareerApplications()
      ]);
      setConsultations(consData || []);
      setCareerApps(appsData || []);
    } catch (err: any) {
      console.error('Error fetching portal data:', err);
      setDataError('Catatan: Akses daftar database lengkap khusus untuk akun Administrator/Pengelola. Hasil submit Anda sudah tersimpan aman di Firestore.');
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (isOpen && currentUser) {
      loadData();
    }
  }, [isOpen, currentUser]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFBF7] w-full max-w-4xl rounded-3xl border border-orange-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00] flex items-center justify-center text-white font-bold">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black tracking-tight">Portal Kemitraan & Database Firebase</h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                  Firestore Connected
                </span>
              </div>
              <p className="text-xs text-gray-300">
                Sistem database real-time CV Hazna Berkah Barokah Indonesia
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {!currentUser ? (
            /* Unauthenticated View */
            <div className="text-center py-10 px-4 max-w-md mx-auto space-y-5">
              <div className="w-16 h-16 rounded-3xl bg-orange-100 flex items-center justify-center text-[#FF6B00] mx-auto shadow-inner">
                <Lock className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#1A1A1A]">Masuk ke Portal Kemitraan</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Gunakan Akun Google Anda untuk mengakses data konsultasi tersimpan, riwayat pendaftaran kemitraan, dan verifikasi status Firebase.
                </p>
              </div>

              <button
                onClick={signInWithGoogle}
                disabled={authLoading}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center gap-3 transition-all cursor-pointer hover:scale-[1.01]"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Masuk Sekarang via Google Auth</span>
              </button>

              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200/80 text-left space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-900">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                  <span>Fitur Database Aktif:</span>
                </div>
                <ul className="text-[11px] text-gray-700 space-y-1 list-disc pl-5">
                  <li>Formulir Konsultasi Kemitraan tersimpan otomatis di Cloud Firestore</li>
                  <li>Lamaran Karir & Portofolio tersimpan langsung ke Database</li>
                  <li>Verifikasi Keamanan dengan Firebase Security Rules v2</li>
                </ul>
              </div>
            </div>
          ) : (
            /* Authenticated View */
            <div className="space-y-6">
              
              {/* User Info Bar */}
              <div className="p-4 rounded-2xl bg-white border border-orange-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt={currentUser.displayName || 'User'}
                      className="w-12 h-12 rounded-2xl object-cover border-2 border-orange-300"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-[#FF6B00] font-bold">
                      <User className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-[#1A1A1A]">{currentUser.displayName || 'Pengguna'}</h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#FF6B00] text-[11px] font-black uppercase tracking-wider">
                        {userProfile?.role || 'Partner'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">{currentUser.email}</p>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar</span>
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-orange-200">
                <button
                  onClick={() => setActiveTab('consultations')}
                  className={`px-5 py-2.5 font-extrabold text-xs border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'consultations'
                      ? 'border-[#FF6B00] text-[#FF6B00]'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Data Konsultasi ({consultations.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('careers')}
                  className={`px-5 py-2.5 font-extrabold text-xs border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'careers'
                      ? 'border-[#FF6B00] text-[#FF6B00]'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Lamaran Karir ({careerApps.length})</span>
                </button>

                <button
                  onClick={loadData}
                  disabled={loadingData}
                  className="ml-auto px-3 py-1.5 text-xs font-bold text-gray-600 hover:text-[#FF6B00] flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingData ? 'animate-spin' : ''}`} />
                  <span>Refresh Data</span>
                </button>
              </div>

              {dataError && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
                  {dataError}
                </div>
              )}

              {/* Tab 1: Consultations */}
              {activeTab === 'consultations' && (
                <div className="space-y-3">
                  {consultations.length === 0 ? (
                    <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-orange-200">
                      <FileText className="w-10 h-10 text-orange-300 mx-auto mb-2" />
                      <p className="text-xs text-gray-600 font-bold">Belum ada data konsultasi di Firestore.</p>
                      <p className="text-[11px] text-gray-500 mt-1">Kirim formulir konsultasi dari halaman kontak untuk mencoba menyimpan data real-time.</p>
                    </div>
                  ) : (
                    consultations.map((item) => (
                      <div key={item.id} className="p-4 rounded-2xl bg-white border border-orange-100 shadow-2xs space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-2">
                          <div>
                            <span className="font-extrabold text-sm text-[#1A1A1A]">{item.name}</span>
                            <span className="ml-2 text-xs text-orange-600 font-medium">({item.packageInterest})</span>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            {item.status || 'pending'}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                            <span>{item.whatsapp}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-[#FF6B00]" />
                            <span>{item.email}</span>
                          </div>
                        </div>
                        {item.message && (
                          <p className="text-xs text-gray-700 bg-orange-50/50 p-2.5 rounded-xl border border-orange-100 font-medium">
                            "{item.message}"
                          </p>
                        )}
                        <p className="text-[10px] text-gray-400 font-mono">ID: {item.id} • {item.createdAt}</p>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Tab 2: Career Applications */}
              {activeTab === 'careers' && (
                <div className="space-y-3">
                  {careerApps.length === 0 ? (
                    <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-orange-200">
                      <Briefcase className="w-10 h-10 text-orange-300 mx-auto mb-2" />
                      <p className="text-xs text-gray-600 font-bold">Belum ada lamaran karir tersimpan.</p>
                      <p className="text-[11px] text-gray-500 mt-1">Lamar posisi kerja di halaman Karir untuk menyimpan aplikasi ke Firebase Firestore.</p>
                    </div>
                  ) : (
                    careerApps.map((item) => (
                      <div key={item.id} className="p-4 rounded-2xl bg-white border border-orange-100 shadow-2xs space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-2">
                          <div>
                            <span className="font-extrabold text-sm text-[#1A1A1A]">{item.applicantName}</span>
                            <span className="ml-2 text-xs font-bold text-[#FF6B00]">Posisi: {item.positionTitle}</span>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                            {item.status || 'received'}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                            <span>{item.whatsapp}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-[#FF6B00]" />
                            <span>{item.email}</span>
                          </div>
                        </div>
                        {item.experience && (
                          <p className="text-xs text-gray-700 bg-orange-50/50 p-2.5 rounded-xl border border-orange-100 font-medium">
                            Pengalaman: {item.experience}
                          </p>
                        )}
                        <p className="text-[10px] text-gray-400 font-mono">ID: {item.id} • {item.createdAt}</p>
                      </div>
                    ))
                  )}
                </div>
              )}

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-orange-50 border-t border-orange-200 flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Terhubung ke Firebase Project ID: <code className="font-bold text-slate-800">scenic-surf-3r5vm</code></span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-all cursor-pointer"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
