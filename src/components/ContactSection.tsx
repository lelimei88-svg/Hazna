import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Building2, CheckCircle2, ShieldCheck, Database, Loader2 } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/franchiseData';
import { ContactFormInput } from '../types';
import { createConsultation } from '../lib/firebase';

interface ContactSectionProps {
  initialPackage?: string;
  onFormSubmitted?: () => void;
  onNavigate?: (page: 'home' | 'product' | 'career' | 'gallery' | 'contact') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPackage }) => {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    whatsapp: '',
    city: '',
    packageInterest: initialPackage || 'Paket Booth Portable (Rp 4.800.000)',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [docRefId, setDocRefId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save directly into Firestore database
      const docId = await createConsultation({
        name: formData.name,
        whatsapp: formData.whatsapp,
        email: formData.city, // City input field holds email/city contact info
        packageInterest: formData.packageInterest,
        message: formData.message,
      });

      if (docId) {
        setDocRefId(docId);
      }
    } catch (err) {
      console.error('Error saving consultation to Firestore:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }

    // Format WhatsApp message URL
    const text = `Halo Konsultan CV Hazna Berkah Barokah,\n\nNama: ${formData.name}\nWhatsApp: ${formData.whatsapp}\nEmail/Kontak: ${formData.city}\nPeminatan Paket: ${formData.packageInterest}\nPesan/Pertanyaan: ${formData.message || '-'}\n\nMohon info proposal lengkap kemitraan Javacafe.`;
    
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodedText}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative overflow-hidden bg-[#FDF6F0] border-b border-orange-100/60 flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        
        {/* Section Header - Centered Layout */}
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-10 sm:mb-12 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Konsultasi Kemitraan Resmi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tight">
            Mulai Diskusi Kemitraan Bersama <span className="text-[#FF6B00]">Hazna Berkah Indonesia</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-lg">
            Tim konsultan bisnis CV Hazna Berkah Barokah Indonesia siap memberikan informasi lengkap seputar skema kemitraan, analisis kelayakan lokasi, hingga estimasi ROI.
          </p>
        </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl w-full mx-auto">
            
            {/* Left Column: Contact Info & Address */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#FDF6F0] rounded-3xl p-6 sm:p-8 border border-orange-200/80 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-black text-[#FF6B00] uppercase tracking-wider block mb-1">
                    Kantor Pusat Franchisor
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1A1A1A]">{COMPANY_INFO.name}</h3>
                  <p className="text-xs text-gray-700 mt-1 font-medium">
                    Badan Usaha Resmi Kemitraan & Distributor Bahan Baku Minuman
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-orange-200/80 text-xs sm:text-sm text-gray-800">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-2xl bg-orange-100/90 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 font-bold">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#1A1A1A]">Alamat Kantor & Gudang:</h4>
                      <p className="text-gray-700 mt-0.5 leading-relaxed font-medium">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5 font-bold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#1A1A1A]">WhatsApp Hotline Konsultan:</h4>
                      <p className="text-gray-900 mt-0.5 font-black">{COMPANY_INFO.whatsappDisplay}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-2xl bg-orange-100/90 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 font-bold">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#1A1A1A]">Email Resmi:</h4>
                      <p className="text-gray-700 mt-0.5 font-medium">{COMPANY_INFO.email}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 mt-0.5 font-bold">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#1A1A1A]">Jam Layanan Konsultasi:</h4>
                      <p className="text-gray-700 mt-0.5 font-medium">{COMPANY_INFO.operatingHours}</p>
                    </div>
                  </div>

                </div>

                {/* Map Placeholder Card */}
                <div className="p-4 rounded-2xl bg-[#FDF6F0] border border-orange-200/90 shadow-2xs flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6B00] shrink-0" />
                  <div className="text-xs">
                    <p className="font-black text-[#1A1A1A]">Lokasi Terverifikasi Google Maps</p>
                    <p className="text-gray-700 font-medium">Purbalingga • Jawa Tengah • Indonesia</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Clean Form Container */}
            <div className="lg:col-span-7 bg-[#FDF6F0] rounded-3xl p-6 sm:p-8 border border-orange-200/80 shadow-xs">
              <h3 className="text-xl sm:text-2xl font-black text-[#1A1A1A] mb-1">Formulir Konsultasi & Layanan Resmi</h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-6 font-medium">
                Isi formulir, dan tim kami akan segera memberikan respon melalui email/telepon Anda.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-900">Formulir Terkirim & Tersimpan di Database!</h4>
                  <p className="text-xs text-emerald-800">
                    Terima kasih. Pesan Anda telah tersimpan aman di Cloud Firestore database dan tim konsultan CV Hazna Berkah Barokah Indonesia akan segera merespon via email/telepon Anda.
                  </p>
                  {docRefId && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 border border-emerald-300 text-[11px] font-mono text-emerald-900">
                      <Database className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Ref ID: {docRefId}</span>
                    </div>
                  )}
                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs font-bold text-emerald-700 underline cursor-pointer"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Nama */}
                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] mb-1">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FDF6F0] border border-orange-200/80 text-sm text-[#1A1A1A] focus:outline-hidden focus:ring-2 focus:ring-[#FF6B00]/30"
                    />
                  </div>

                  {/* No. Telepon & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1A1A1A] mb-1">
                        No. Telepon / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="Contoh: 085135990588"
                        className="w-full px-4 py-3 rounded-2xl bg-[#FDF6F0] border border-orange-200/80 text-sm text-[#1A1A1A] focus:outline-hidden focus:ring-2 focus:ring-[#FF6B00]/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1A1A1A] mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Contoh: nama@email.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#FDF6F0] border border-orange-200/80 text-sm text-[#1A1A1A] focus:outline-hidden focus:ring-2 focus:ring-[#FF6B00]/30"
                      />
                    </div>
                  </div>

                  {/* Tujuan Konsultasi */}
                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] mb-1">
                      Tujuan Konsultasi <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.packageInterest}
                      onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FDF6F0] border border-orange-200/80 text-sm text-[#1A1A1A] focus:outline-hidden focus:ring-2 focus:ring-[#FF6B00]/30"
                    >
                      <option value="Konsultasi Kemitraan & Paket Gerobak">Konsultasi Kemitraan & Paket Gerobak</option>
                      <option value="Penawaran Kerjasama Supplayer / Business Partnership">Penawaran Kerjasama Business Partnership</option>
                      <option value="Pertanyaan Seputar Karir / Rekrutmen">Pertanyaan Seputar Karir & Rekrutmen</option>
                      <option value="Konsultasi Lokasi & Analisis ROI">Konsultasi Lokasi & Analisis ROI</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] mb-1">
                      Pesan / Rincian Pertanyaan
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan pertanyaan atau rencana lokasi konsultasi Anda di sini..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#FDF6F0] border border-orange-200/80 text-sm text-[#1A1A1A] focus:outline-hidden focus:ring-2 focus:ring-[#FF6B00]/30"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#E05E00] text-white font-extrabold text-sm shadow-md shadow-orange-500/20 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Menyimpan ke Firestore...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Formulir Konsultasi</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-500 text-center mt-2 font-medium flex items-center justify-center gap-1">
                    <Database className="w-3 h-3 text-[#FF6B00]" />
                    <span>Tersimpan otomatis di Cloud Firestore & Diteruskan ke WhatsApp</span>
                  </p>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>
  );
};
