import {
  DrinkProduct,
  BenefitItem,
  FranchisePackage,
  CareerOpening,
  GalleryItem,
  Testimonial,
  EmployeeTestimonial
} from '../types';

export const IMAGES = {
  hero: '/src/assets/images/hazna_booth_gerobak_1785122131603.jpg',
  drinksGrid: '/src/assets/images/javacafe_drinks_1785119563570.jpg',
  boothContainer: '/src/assets/images/javacafe_booth_1785119575726.jpg',
  entrepreneur: '/src/assets/images/javacafe_entrepreneur_1785119591826.jpg',
  consultation: '/src/assets/images/javacafe_entrepreneur_1785119591826.jpg',
};

export const BENEFITS: BenefitItem[] = [
  {
    id: 'b1',
    title: 'Modal Terjangkau',
    description: 'Investasi awal sangat rasional bagi pelajar, mahasiswa, hingga pengusaha pemula tanpa royalti bulanan.',
    icon: 'Wallet',
    highlightText: '100% Keuntungan Milik Mitra'
  },
  {
    id: 'b2',
    title: 'Sistem Siap Cuan',
    description: 'Panduan SOP lengkap, pelatihan resep standar barista, dan integrasi sistem POS digital otomatis.',
    icon: 'Zap',
    highlightText: 'Tinggal Jalankan SOP'
  },
  {
    id: 'b3',
    title: 'Menu Terlaris',
    description: 'Formulasi racikan rahasia rasa bintang lima dengan HPP rendah dan margin keuntungan mencapai 60-70%.',
    icon: 'Heart',
    highlightText: 'HPP Rendah, Margin Tinggi'
  },
  {
    id: 'b4',
    title: 'Dukungan Penuh',
    description: 'Tim pendamping survei lokasi, promosi digital marketing, dan jaminan suplai bahan baku rutin.',
    icon: 'ShieldCheck',
    highlightText: 'Pendampingan Hingga Buka'
  }
];

export const PRODUCTS: DrinkProduct[] = [
  {
    id: 'p1',
    name: 'Café Latte',
    category: 'coffee',
    categoryLabel: 'Coffee Series',
    price: 'Rp 15.000',
    hpp: 'Rp 4.800',
    profitMargin: '68%',
    shortDescription: 'Espresso lembut yang berpadu sempurna dengan kehangatan susu manis murni.',
    fullDescription: 'Racikan khas Café Latte Javacafe memadukan double shot espresso pilihan dengan steamed milk gurih dan rasa manis yang seimbang. Favorit penikmat kopi sehari-hari.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    imageSrc: '/images/cafe-latte.jpg',
    isBestSeller: true,
    flavorNotes: ['Espresso Blend', 'Fresh Milk', 'Smooth & Creamy']
  },
  {
    id: 'p2',
    name: 'Jamilo',
    category: 'coffee',
    categoryLabel: 'Coffee Series',
    price: 'Rp 16.000',
    hpp: 'Rp 5.000',
    profitMargin: '69%',
    shortDescription: 'Resep khas Javacafe perpaduan kopi espresso kental dengan rasa legit malty creamy.',
    fullDescription: 'Perpaduan eksklusif Javacafe antara espresso kental khas Indonesia dengan sentuhan manis malty cokelat cream yang kaya rasa dan bikin nagih.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    imageSrc: '/images/jamilo.jpg',
    isBestSeller: true,
    flavorNotes: ['Malty Espresso', 'Creamy Milk', 'Caramelized Sugar']
  },
  {
    id: 'p3',
    name: 'Americano',
    category: 'coffee',
    categoryLabel: 'Coffee Series',
    price: 'Rp 12.000',
    hpp: 'Rp 3.600',
    profitMargin: '70%',
    shortDescription: 'Kenikmatan espresso murni klasik beraroma mantap dengan kesegaran es batu.',
    fullDescription: 'Seduhan espresso murni dari biji kopi pilihan dengan karakter bold dan aroma khas yang sangat menyegarkan di cuaca panas.',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=800&q=80',
    imageSrc: '/images/americano.jpg',
    isBestSeller: false,
    flavorNotes: ['Bold Espresso', 'Rich Aroma', 'Clean Aftertaste']
  },
  {
    id: 'p4',
    name: 'Cappuccino Assassino',
    category: 'coffee',
    categoryLabel: 'Coffee Series',
    price: 'Rp 16.000',
    hpp: 'Rp 5.200',
    profitMargin: '67.5%',
    shortDescription: 'Cappuccino kental racikan rahasia Javacafe dengan rasa kuat nan menggugah selera.',
    fullDescription: 'Racikan cappuccino spesial ala ninja assassin Javacafe dengan rasa kopi yang ekstra mantap, foam melimpah, dan aroma manis yang menggugah energi.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    imageSrc: '/images/cappuccino-assassino.jpg',
    isBestSeller: true,
    flavorNotes: ['Extra Espresso', 'Velvety Foam', 'Cocoa Dust']
  },
  {
    id: 'p5',
    name: 'Milo',
    category: 'non-coffee',
    categoryLabel: 'Non-Coffee Series',
    price: 'Rp 14.000',
    hpp: 'Rp 4.500',
    profitMargin: '68%',
    shortDescription: 'Minuman cokelat malt Milo dingin dengan rasa manis legendaris yang kaya energi.',
    fullDescription: 'Olahan cokelat malt Milo legendaris yang dikocok dingin dengan racikan susu murni khas Javacafe dan taburan Milo bubuk renyah di atasnya.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    imageSrc: '/images/milo.jpg',
    isBestSeller: true,
    flavorNotes: ['Chocolate Malt', 'Creamy Milk', 'Crunchy Milo Powder']
  },
  {
    id: 'p6',
    name: 'Lemonade',
    category: 'non-coffee',
    categoryLabel: 'Non-Coffee Series',
    price: 'Rp 12.000',
    hpp: 'Rp 3.500',
    profitMargin: '71%',
    shortDescription: 'Kesegaran perasan lemon alami yang asam manis dingin menyegarkan dahaga.',
    fullDescription: 'Perasan buah lemon asli dipadukan dengan gula tebu murni dan es batu dingin. Pilihan tepat pemuas dahaga yang kaya vitamin C dan menyegarkan.',
    image: 'https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=800&q=80',
    imageSrc: '/images/lemonade.jpg',
    isBestSeller: false,
    flavorNotes: ['Fresh Lemon Juice', 'Cane Sugar', 'Refreshing Ice']
  },
  {
    id: 'p7',
    name: 'Matcha Coco',
    category: 'non-coffee',
    categoryLabel: 'Non-Coffee Series',
    price: 'Rp 18.000',
    hpp: 'Rp 5.500',
    profitMargin: '69%',
    shortDescription: 'Perpaduan sempurna matcha Jepang otentik di atas base gurih air kelapa & susu.',
    fullDescription: 'Inovasi minuman dua lapis antara Uji Matcha otentik Jepang dengan rasa gurih alami air kelapa dan susu dingin. Unik, mewah, dan sangat diminati.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    imageSrc: '/images/matcha-coco.jpg',
    isBestSeller: true,
    flavorNotes: ['Uji Matcha', 'Fresh Coconut Water', 'Creamy Milk Layer']
  },
  {
    id: 'p8',
    name: 'Matcha',
    category: 'non-coffee',
    categoryLabel: 'Non-Coffee Series',
    price: 'Rp 16.000',
    hpp: 'Rp 5.000',
    profitMargin: '68.8%',
    shortDescription: 'Racikan matcha hijau murni otentik nan lembut beraroma khas menenangkan.',
    fullDescription: 'Matcha latte klasik dengan bubuk matcha Jepang berkualitas tinggi, dipadu susu segar dingin yang memberikan tekstur lembut dan aroma khas green tea.',
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80',
    imageSrc: '/images/matcha.jpg',
    isBestSeller: false,
    flavorNotes: ['Japanese Matcha', 'Full Cream Milk', 'Earthy & Sweet']
  }
];

export const FRANCHISE_PACKAGES: FranchisePackage[] = [
  {
    id: 'pkg-portable',
    name: 'Paket Booth Portable',
    badge: 'Terfavorit Pelajar & Pemula',
    priceFormatted: 'Rp 4.800.000',
    priceNumeric: 4800000,
    originalPrice: 'Rp 7.500.000',
    estimateRoi: '1 - 2 Bulan',
    targetSpace: '1.5 x 1 meter (Indoor/Pujasera/Teras Rumah)',
    image: IMAGES.boothContainer,
    popular: true,
    description: 'Solusi ideal bagi pemula atau mahasiswa yang ingin memulai bisnis warung kopi & minuman kekinian modal ringan dengan fleksibilitas tempat tinggi.',
    includes: [
      'Booth Portable Lipat Eksklusif Branding Javacafe',
      'Mesin Press Cup Sealer Otomatis',
      'Blender High-Speed Commercial',
      'Dispenser Teh Stainless Steel & Ice Bucket',
      'Bahan Baku Awal Siap Jual untuk 300 Cup',
      'Set Jigger, Sendok Boba, & Tempat Bubuk',
      'X-Banner Promosi & Menu Akrilik Meja',
      'Akses SOP Video Tutorial & Buku Resep Standard',
      'Free Listing Google Maps & Bahan Promosi Medsos'
    ]
  },
  {
    id: 'pkg-container',
    name: 'Paket Container Minimalis',
    badge: 'Paling Laris & Semi-Permanent',
    priceFormatted: 'Rp 9.500.000',
    priceNumeric: 9500000,
    originalPrice: 'Rp 13.000.000',
    estimateRoi: '2 - 3 Bulan',
    targetSpace: '2 x 2 meter (Area Parkir, Alfamart/Indomaret, Sekolah)',
    image: IMAGES.hero,
    popular: false,
    description: 'Konsep booth kontainer kekinian dengan bahan besi spandek tahan cuaca, cocok diletakkan di outdoor, minimarket, atau pinggir jalan raya.',
    includes: [
      'Booth Kontainer Besi Mungil Tahan Cuaca + Neon Box Glow',
      'Mesin Cup Sealer Digital + Blender Heavy Duty 2 Unit',
      'Espresso Portafilter Machine / Cold Brew Dripper Kit',
      'Peralatan Lengkap Barista (Shaker, Syrup Pump, Ice Box 30L)',
      'Bahan Baku Awal Siap Jual untuk 600 Cup',
      'Seragam Barista Javacafe (2 Apron & 2 Topi)',
      'Integrasi Tablet Kasir Android & Aplikasi POS Gratis 1 Tahun',
      'Promosi Iklan Instagram / TikTok Local Area senilai Rp 500rb'
    ]
  },
  {
    id: 'pkg-signature',
    name: 'Paket Cafe Signature Outlet',
    badge: 'Omset Maksimal Dual Concept',
    priceFormatted: 'Rp 18.500.000',
    priceNumeric: 18500000,
    originalPrice: 'Rp 25.000.000',
    estimateRoi: '3 - 4 Bulan',
    targetSpace: '3 x 4 meter (Ruko, Stand Mall, Cafe Tongkrongan)',
    image: IMAGES.entrepreneur,
    popular: false,
    description: 'Konsep mini cafe lengkap dengan fasilitas tempat duduk, signage interior premium, dan menu variasi terlengkap termasuk dessert pendamping.',
    includes: [
      'Interior Design Guidance & Standard Neon Sign Javacafe',
      'Mesin Espresso Komersial 1 Group + Milk Steamer',
      'Mesin Sealer Otomatis Heavy Duty + Grinder Kopi Komersial',
      'Under-counter Refrigerator / Freezer Mini',
      'Bahan Baku Awal Siap Jual untuk 1.200 Cup',
      'Pelatihan Barista In-House / Direct Training oleh Master Trainer',
      'Paket Kasir POS Lengkap (Tablet + Printer Struk Thermal)',
      'Grand Opening Event Toolkit + Pendampingan Tim Pusat 2 Hari'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Andi Pratama',
    city: 'Surabaya, Jawa Timur',
    outletName: 'Javacafe Stand Kampus C',
    monthlyRevenue: 'Rp 18.500.000 / bln',
    quote: 'Awalnya ragu karena masih status mahasiswa akhir. Tapi setelah ambil Paket Portable Javacafe, ternyata balik modal hanya dalam waktu 45 hari! Resep gula aren dan matchanya bener-bener nagih buat anak kuliah.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=200'
  },
  {
    id: 't2',
    name: 'Siti Rahmawati',
    city: 'Bandung, Jawa Barat',
    outletName: 'Javacafe Container Dago',
    monthlyRevenue: 'Rp 27.000.000 / bln',
    quote: 'CV Hazna Berkah Indonesia sangat responsif dalam suplai bahan baku. Tidak pernah telat kirim dan ketersediaan powder selalu aman. Sekarang sudah jalan 8 bulan dan berencana buka cabang kedua!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=200'
  },
  {
    id: 't3',
    name: 'Budi Santoso',
    city: 'Semarang, Jawa Tengah',
    outletName: 'Javacafe Teras Minimarket',
    monthlyRevenue: 'Rp 21.200.000 / bln',
    quote: 'Sistem tanpa royalti ini yang membedakan Javacafe dari franchise lain. 100% keuntungan bersih milik mitra. Pendampingan tim digital marketing pusat sangat membantu jualan lewat GrabFood/GoFood.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=200'
  }
];

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: 'c-content-creator',
    title: 'Content Creator',
    department: 'Marketing & Digital Media',
    location: 'Head Office Purbalingga',
    type: 'Full-time',
    description: 'Memproduksi konten kreatif foto/video, mengelola saluran media sosial resmi, dan membangun awareness brand CV Hazna Berkah Indonesia.',
    qualifications: [
      'Pria atau Wanita',
      'Kreatif, inovatif, dan selalu mengikuti perkembangan tren digital terbaru',
      'Terbiasa dan aktif menggunakan berbagai platform media sosial',
      'Mampu mengoperasikan aplikasi editing foto dan/atau video dengan baik',
      'Percaya diri dan nyaman tampil di depan kamera',
      'Mampu bekerja secara mandiri maupun dalam tim',
      'Mempunyai pemahaman Digital Marketing (nilai tambah)'
    ],
    benefits: ['Gaji Pokok', 'Gaji Lembur', 'Makan 1x', 'Bonus Performa']
  },
  {
    id: 'c-video-editor',
    title: 'Video Editor',
    department: 'Creative & Production',
    location: 'Head Office Purbalingga',
    type: 'Full-time',
    description: 'Menciptakan karya video short-form promosi, materi iklan digital kemitraan, serta materi visual marketing berkualitas tinggi.',
    qualifications: [
      'Pria atau Wanita',
      'Menguasai software editing video (CapCut / Premiere Pro / After Effects)',
      'Memiliki portofolio video (WAJIB)',
      'Menguasai editing video short-form (Instagram Reels, TikTok, Video Ads)',
      'Mampu membuat script + pengambilan angle video sesuai tujuan konten',
      'Mampu membuat video untuk kebutuhan promosi digital & flyer',
      'Terbiasa bekerja dengan deadline dan bisa menerima revisi'
    ],
    benefits: ['Gaji Pokok', 'Gaji Lembur', 'Makan 1x', 'Bonus Performa']
  },
  {
    id: 'c-welder',
    title: 'Welder / Tukang Las',
    department: 'Workshop & Fabrication',
    location: 'Workshop Purbalingga',
    type: 'Full-time',
    description: 'Melakukan perakitan, pengelasan, dan fabrikasi gerobak container modern berkualitas tinggi sesuai standar pabrikasi Hazna.',
    qualifications: [
      'Pria (Pengalaman minimal 1 tahun di bidang pengelasan)',
      'Menguasai teknik las listrik dengan rapi dan presisi',
      'Mampu membaca gambar kerja atau desain teknik sederhana',
      'Teliti, cekatan, dan mampu bekerja sesuai target',
      'Disiplin dan bertanggung jawab',
      'Diutamakan memiliki sertifikat welder (nilai tambah)'
    ],
    benefits: ['Gaji Pokok', 'Gaji Lembur', 'Makan 1x']
  },
  {
    id: 'c-barista',
    title: 'Crew Outlet | Barista',
    department: 'Outlet Operations',
    location: 'Purbalingga & Sekitarnya',
    type: 'Full-time / Shift',
    description: 'Menyajikan racikan minuman berkualitas tinggi, menjaga kebersihan outlet, serta memberikan pelayanan ramah terbaik kepada setiap pelanggan.',
    qualifications: [
      'Laki-laki atau Perempuan (Usia maksimal 25 tahun)',
      'Pendidikan minimal SMA/SMK Sederajat',
      'Jujur, disiplin, cekatan, dan bertanggung jawab',
      'Berpenampilan menarik & mampu bekerja dalam tim',
      'Bersedia mengikuti jam kerja full atau shift & akhir pekan',
      'Berpengalaman di bidang FnB lebih diutamakan',
      'Memiliki SKCK Aktif & tidak sedang berkuliah'
    ],
    benefits: ['Gaji Pokok', 'Seragam Resmi', 'Bonus Penjualan']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Tampilan Booth Kontainer Modern',
    category: 'Outlet',
    image: IMAGES.boothContainer,
    caption: 'Desain booth kontainer Javacafe yang hangat, bersih, dan memikat perhatian pelanggan.'
  },
  {
    id: 'g2',
    title: 'Koleksi Minuman Signature Javacafe',
    category: 'Produk',
    image: IMAGES.drinksGrid,
    caption: 'Tampilan varian minuman boba, matcha, kopi aren, dan fruit tea yang menggugah selera.'
  },
  {
    id: 'g3',
    title: 'Kemitraan CV Hazna Berkah Indonesia',
    category: 'Kemitraan',
    image: IMAGES.entrepreneur,
    caption: 'Para mitra pengusaha muda sukses mengembangkan usaha outlet Javacafe di daerahnya.'
  },
  {
    id: 'g4',
    title: 'Suasana Antrean Grand Opening Outlet',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    caption: 'Antusiasme pembeli saat gelaran promo beli 1 gratis 1 di hari pembukaan outlet mitra.'
  },
  {
    id: 'g5',
    title: 'Proses Quality Control Bahan Baku',
    category: 'Kemitraan',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    caption: 'Standar higienis dan bahan bersertifikat Halal MUI & BPOM diproduksi secara konsisten.'
  },
  {
    id: 'g6',
    title: 'Suasana Tempat Kopi Tongkrongan',
    category: 'Outlet',
    image: IMAGES.hero,
    caption: 'Pencahayaan hangat dan konsep ramah lingkungan menarik rombongan anak muda.'
  }
];

export const EMPLOYEE_TESTIMONIALS: EmployeeTestimonial[] = [
  {
    id: 'emp-1',
    name: 'Budi Santoso',
    role: 'Barista Trainer & R&D Lead',
    years: '3 Tahun di Hazna',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    quote: 'Di CV Hazna Berkah Indonesia, saya diberi ruang penuh berkreasi meracik racikan menu minuman khas yang kini dinikmati oleh ribuan mitra di seluruh Nusantara.'
  },
  {
    id: 'emp-2',
    name: 'Amanda Putri',
    role: 'Content Creator & Marketing',
    years: '2 Tahun di Hazna',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    quote: 'Budaya kerja di Hazna sangat inklusif, dinamis, dan saling mendukung. Setiap ide kampanye kreatif selalu diapresiasi dan dieksekusi dengan cepat.'
  },
  {
    id: 'emp-3',
    name: 'Rizky Firmansyah',
    role: 'Supervisor Kemitraan',
    years: '4 Tahun di Hazna',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    quote: 'Kebanggaan terbesar saya adalah mendampingi para wirausahawan lokal dari nol hingga sukses mengoperasikan gerobak container Hazna yang konsisten profit.'
  },
  {
    id: 'emp-4',
    name: 'Siti Rahmawati',
    role: 'Quality Assurance Lead',
    years: '2 Tahun di Hazna',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    quote: 'Sistem manajemen mutu dan standarisasi rasa di Hazna dijaga secara konsisten. Sangat bangga menjadi bagian dari tim yang mengutamakan higienitas & rasa terbaik.'
  },
  {
    id: 'emp-5',
    name: 'Hendra Wijaya',
    role: 'Head of Franchise Support',
    years: '3.5 Tahun di Hazna',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    quote: 'Kami memprioritaskan kepuasan dan kemudahan para mitra. Layanan konsultasi 24/7 dan pendampingan lapangan komprehensif adalah kunci sukses bersama.'
  },
  {
    id: 'emp-6',
    name: 'Maya Rosita',
    role: 'Human Capital Officer',
    years: '2.5 Tahun di Hazna',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    quote: 'Lingkungan kerja yang profesional dan transparan membuat seluruh tim bersemangat untuk terus berkembang, belajar hal baru, dan memberikan kontribusi terbaik.'
  }
];

export const karyawanData = EMPLOYEE_TESTIMONIALS;

export const COMPANY_INFO = {
  name: 'CV Hazna Berkah Indonesia',
  brandName: 'Hazna Berkah',
  tagline: 'Mitra Strategis Ekosistem Bisnis Kuliner Indonesia',
  whatsappNumber: '6285135990588',
  whatsappDisplay: '+62 851-3599-0588',
  email: 'haznaberkahindonesia@gmail.com',
  address: 'Jl. Raya Pengalusan No.6, Kompas, Pengalusan, Kec. Mrebet, Kabupaten Purbalingga, Jawa Tengah',
  operatingHours: 'Senin - Sabtu: 08.00 - 17.00 WIB',
  socials: {
    instagram: '@haznaberkah.official',
    tiktok: '@haznaberkah.indonesia',
    facebook: 'CV Hazna Berkah Indonesia Official'
  }
};