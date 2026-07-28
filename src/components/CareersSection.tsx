import React, { useState, useEffect, useCallback } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Mail,
  Quote,
  MessageSquare,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Database,
  Loader2,
  User,
  Phone
} from 'lucide-react';
import { CAREER_OPENINGS, COMPANY_INFO, karyawanData } from '../data/franchiseData';
import { createCareerApplication } from '../lib/firebase';

interface CareersSectionProps {
  onApplyCareer: (positionTitle: string) => void;
  onNavigate?: (page: 'home' | 'product' | 'career' | 'gallery' | 'contact') => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onApplyCareer }) => {
  const [selectedJobId, setSelectedJobId] = useState<string>(CAREER_OPENINGS[0].id);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  // Direct Firestore Application Form State
  const [showApplyModal, setShowApplyModal] = useState<boolean>(false);
  const [applicantName, setApplicantName] = useState<string>('');
  const [applicantWhatsapp, setApplicantWhatsapp] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');
  const [applicantNotes, setApplicantNotes] = useState<string>('');
  const [isSubmittingApp, setIsSubmittingApp] = useState<boolean>(false);
  const [appSubmitted, setAppSubmitted] = useState<boolean>(false);
  const [appDocId, setAppDocId] = useState<string | null>(null);

  // Slider Carousel States
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [visibleItems, setVisibleItems] = useState<number>(3);

  const selectedJob = CAREER_OPENINGS.find((j) => j.id === selectedJobId) || CAREER_OPENINGS[0];

  const handleDirectApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingApp(true);
    try {
      const docId = await createCareerApplication({
        positionTitle: selectedJob.title,
        applicantName,
        whatsapp: applicantWhatsapp,
        email: applicantEmail,
        notes: applicantNotes
      });
      if (docId) {
        setAppDocId(docId);
      }
      setAppSubmitted(true);
    } catch (err) {
      console.error('Error submitting application:', err);
    } finally {
      setIsSubmittingApp(false);
    }
  };

  // Dynamic Responsive Breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, karyawanData.length - visibleItems);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay timer (Every 4 seconds, pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="careers" className="py-12 sm:py-16 relative overflow-hidden bg-[#FDF6F0] border-b border-orange-100/60 flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12 flex flex-col items-center justify-center">
        
        {/* Section Header - Centered Layout */}
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-8 sm:mb-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Karir & Kesempatan Bergabung</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tight">
            Tumbuh Bersama <span className="text-[#FF6B00]">CV Hazna Berkah</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-lg">
            Kami membuka kesempatan bagi talenta energik untuk bergabung membangun ekosistem bisnis kuliner profesional dan berdampak positif.
          </p>
        </div>

        {/* Careers Layout: Job List on Left, Job Detail on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl w-full mx-auto">
          
          {/* Job List Selector */}
          <div className="lg:col-span-5 space-y-3">
            {CAREER_OPENINGS.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJobId(job.id)}
                className={`p-5 rounded-3xl transition-all cursor-pointer border ${
                  selectedJobId === job.id
                    ? 'bg-[#FDF6F0] border-[#FF6B00] ring-2 ring-[#FF6B00]/20 shadow-md scale-[1.01]'
                    : 'bg-[#FDF6F0] hover:border-[#FF6B00]/60 border-orange-200/80 shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-wider bg-orange-100/90 px-3 py-0.5 rounded-full">
                    {job.department}
                  </span>
                  <span className="text-xs text-gray-600 font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#FF6B00]" /> {job.type}
                  </span>
                </div>
                <h3 className="text-base font-black text-[#1A1A1A] mt-2">{job.title}</h3>
                <p className="text-xs text-gray-700 flex items-center gap-1 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" /> {job.location}
                </p>
              </div>
            ))}
          </div>

          {/* Job Detail Card - Seamless on Cream */}
          <div className="lg:col-span-7 bg-[#FDF6F0] rounded-3xl p-6 sm:p-8 border border-orange-200/80 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-black text-[#FF6B00] uppercase tracking-wider block">
                {selectedJob.department} • {selectedJob.type}
              </span>
              <h3 className="text-2xl font-black text-[#1A1A1A] mt-1">{selectedJob.title}</h3>
              <p className="text-xs text-gray-700 font-bold flex items-center gap-1 mt-1">
                <MapPin className="w-4 h-4 text-[#FF6B00]" /> {selectedJob.location}
              </p>
            </div>

            <div className="border-t border-orange-200/80 pt-4 space-y-2">
              <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider">
                Deskripsi Pekerjaan:
              </h4>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
                {selectedJob.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider">
                Fasilitas & Benefit:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedJob.benefits?.map((benefit, idx) => (
                  <span key={idx} className="bg-[#FDF6F0] text-gray-800 px-3 py-1 rounded-full text-xs font-bold border border-orange-200/80">
                    {benefit}
                  </span>
                )) || (
                  <span className="text-xs text-gray-600 font-medium">Gaji Pokok, Lembur, Makan 1x, Bonus</span>
                )}
              </div>
            </div>

            <div className="space-y-2 pb-2">
              <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider">
                Kualifikasi & Persyaratan:
              </h4>
              <ul className="space-y-2.5">
                {selectedJob.qualifications.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prominent Call to Action - Clean Submission Card */}
            <div className="pt-5 border-t border-orange-200/80">
              <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-5 sm:p-6 border border-orange-200/90 shadow-sm space-y-4">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100/90 text-[#FF6B00] flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-[#FF6B00] tracking-wider block">
                      Instruksi Pengiriman CV
                    </span>
                    <p className="text-sm sm:text-base font-black text-[#1A1A1A] mt-0.5">
                      Kirimkan CV terbaru ke <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#FF6B00] hover:underline font-extrabold">{COMPANY_INFO.email}</a>
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  Sertakan subjek email: <span className="font-bold text-[#1A1A1A] bg-orange-100/60 px-2 py-0.5 rounded-md border border-orange-200/60 inline-block my-0.5">Lamaran_{selectedJob.title}_{COMPANY_INFO.brandName}</span> beserta CV & Portofolio terbaru Anda.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-1 w-full">
                  <button
                    onClick={() => {
                      setAppSubmitted(false);
                      setShowApplyModal(true);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FF6B00] hover:bg-[#E05E00] text-white font-black text-xs sm:text-sm shadow-md shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Database className="w-4 h-4" />
                    <span>Lamar Online (Tersimpan di Firestore)</span>
                  </button>
                  <button
                    onClick={() => onApplyCareer(selectedJob.title)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#FF6B00]" />
                    <span>Konsultasi via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Apply Online */}
        {showApplyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-[#FFFBF7] w-full max-w-md rounded-3xl border border-orange-200 shadow-2xl p-6 relative">
              <button
                onClick={() => setShowApplyModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 text-xs font-black text-[#FF6B00] uppercase tracking-wider mb-1">
                <Briefcase className="w-4 h-4" />
                <span>Formulir Lamaran Kerja</span>
              </div>
              <h3 className="text-xl font-black text-[#1A1A1A] mb-4">Lamar: {selectedJob.title}</h3>

              {appSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-base">Lamaran Anda Tersimpan!</h4>
                  <p className="text-xs text-emerald-800">
                    Data pelamar untuk posisi <b>{selectedJob.title}</b> telah tersimpan di Cloud Firestore database HRD.
                  </p>
                  {appDocId && (
                    <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-[10px] font-mono text-emerald-900">
                      ID Lamaran: {appDocId}
                    </div>
                  )}
                  <button
                    onClick={() => setShowApplyModal(false)}
                    className="w-full mt-3 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs cursor-pointer"
                  >
                    Selesai
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDirectApply} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Nama lengkap sesuai KTP"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-orange-200 text-xs text-[#1A1A1A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] mb-1">No. WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={applicantWhatsapp}
                      onChange={(e) => setApplicantWhatsapp(e.target.value)}
                      placeholder="085135990588"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-orange-200 text-xs text-[#1A1A1A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="email@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-orange-200 text-xs text-[#1A1A1A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Ringkasan Pengalaman / Catatan</label>
                    <textarea
                      rows={2}
                      value={applicantNotes}
                      onChange={(e) => setApplicantNotes(e.target.value)}
                      placeholder="Pengalaman singkat atau tautan Google Drive CV & Portofolio"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-orange-200 text-xs text-[#1A1A1A]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingApp}
                    className="w-full py-3 rounded-full bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold text-xs shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmittingApp ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Menyimpan ke Firestore...</span>
                      </>
                    ) : (
                      <>
                        <Database className="w-4 h-4" />
                        <span>Kirim Lamaran ke Database</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Section: 'Kata Mereka yang Bekerja di Hazna' - Interactive Carousel Slider */}
        <div className="pt-10 border-t border-orange-200/80 w-full max-w-6xl mx-auto space-y-6">
          
          {/* Header Row with Navigation Arrows */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs">
                <MessageSquare className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Budaya & Pengalaman Kerja</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
                Kata Mereka yang <span className="text-[#FF6B00]">Bekerja di Hazna</span>
              </h3>
              <p className="text-xs text-gray-600 font-medium">
                Geser atau klik kartu untuk membaca pengalaman nyata karir mereka di CV Hazna Berkah.
              </p>
            </div>

            {/* Premium Navigation Arrows */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-full bg-white text-[#1A1A1A] border border-orange-200/90 shadow-sm hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-full bg-white text-[#1A1A1A] border border-orange-200/90 shadow-sm hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Slider Window with Overflow Hidden */}
          <div
            className="overflow-hidden w-full relative py-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Sliding Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {karyawanData.map((emp) => {
                const isFlipped = !!flippedCards[emp.id];
                return (
                  <div
                    key={emp.id}
                    className="shrink-0 px-2.5"
                    style={{ width: `${100 / visibleItems}%` }}
                  >
                    <div
                      onClick={() => toggleFlip(emp.id)}
                      className="group h-[380px] sm:h-[400px] [perspective:1000px] cursor-pointer relative"
                    >
                      <div
                        className={`relative w-full h-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] shadow-md group-hover:shadow-xl group-hover:-translate-y-1.5 ${
                          isFlipped ? '[transform:rotateY(180deg)]' : ''
                        }`}
                      >
                        {/* Front Side */}
                        <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden [backface-visibility:hidden] border border-orange-200/90 bg-slate-950 flex flex-col justify-end">
                          <img
                            src={emp.image}
                            alt={emp.name}
                            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="relative z-10 p-5 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent text-white pt-20">
                            <span className="text-[10px] font-extrabold uppercase bg-[#FF6B00] text-white px-2.5 py-0.5 rounded-full inline-block mb-2 shadow-xs">
                              {emp.years}
                            </span>
                            <h4 className="text-lg font-black text-white">{emp.name}</h4>
                            <p className="text-xs text-gray-300 font-medium">{emp.role}</p>
                            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#FF6B00] font-bold">
                              <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                              <span>Klik untuk baca kutipan</span>
                            </div>
                          </div>
                        </div>

                        {/* Back Side (Quote) */}
                        <div className="absolute inset-0 w-full h-full rounded-3xl p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white [transform:rotateY(180deg)] [backface-visibility:hidden] border border-slate-800 flex flex-col justify-between shadow-2xl">
                          <div>
                            <Quote className="w-8 h-8 text-[#FF6B00] mb-3 opacity-90" />
                            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal italic">
                              "{emp.quote}"
                            </p>
                          </div>

                          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                            <div>
                              <p className="text-xs font-black text-white">{emp.name}</p>
                              <p className="text-[10px] text-gray-400 font-medium">{emp.role}</p>
                            </div>
                            <span className="text-[10px] font-bold text-[#FF6B00] bg-[#FF6B00]/10 px-2.5 py-1 rounded-full border border-[#FF6B00]/20">
                              Hazna Team
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-[#FF6B00] shadow-xs'
                    : 'w-2.5 bg-orange-200/80 hover:bg-[#FF6B00]/60'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

