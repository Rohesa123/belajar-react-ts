// Data statis profil — diambil dari GitHub @Rohesa123 (per Juni 2026).
// Dipisah dari komponen agar gampang di-update sewaktu-waktu.

export const profile = {
  name: "Rohesa Sidiq Permana",
  username: "Rohesa123",
  avatar: "https://avatars.githubusercontent.com/u/94891358?v=4",
  location: "Indonesia",
  role: "Java & Spring Boot Developer",
  tagline: "Membangun backend yang kokoh, aman, dan rapi dengan Java & Spring Boot.",
  email: "rohesasidiqpermana05@gmail.com",
  githubUrl: "https://github.com/Rohesa123",
  blogUrl: "https://rohesa.vercel.app",
  joinedYear: 2021,
  // Bio singkat — silakan revisi sesuai gaya Anda.
  bio: "Backend Developer di PT Digital Amore Kriyanesia (DAK). Saya fokus membangun REST API dan sistem yang aman menggunakan Java & Spring Boot, dengan minat khusus pada keamanan aplikasi (JWT & 2FA). Di luar itu saya juga membangun aplikasi mobile dan web, serta terus belajar teknologi baru.",
} as const;

// Perusahaan tempat bekerja saat ini.
export const company = {
  name: "PT Digital Amore Kriyanesia",
  short: "DAK",
  role: "Backend Developer",
  url: "https://dak.co.id/",
  desc: "Software house & IT consulting yang membangun perangkat lunak modern untuk bisnis dan institusi.",
} as const;

// Tautan media sosial. `type` dipakai untuk memilih ikon.
export type SocialType =
  | "github"
  | "linkedin"
  | "twitter"
  | "instagram"
  | "facebook"
  | "email"
  | "blog";

export const socials: { type: SocialType; label: string; url: string }[] = [
  { type: "github", label: "GitHub", url: "https://github.com/Rohesa123" },
  { type: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/rohesa-sidiq-permana-91400927a/" },
  { type: "twitter", label: "Twitter / X", url: "https://twitter.com/RohesaSidiqP" },
  { type: "instagram", label: "Instagram", url: "https://www.instagram.com/rohesasidiqpermana05/" },
  { type: "facebook", label: "Facebook", url: "https://facebook.com/rohesa.permana.9" },
  { type: "blog", label: "Blog", url: "https://rohesa.vercel.app" },
  { type: "email", label: "Email", url: "mailto:rohesasidiqpermana05@gmail.com" },
];

// Sertifikat Dicoding (judul diambil dari halaman sertifikat).
export const certificates: { title: string; issuer: string; url: string }[] = [
  { title: "Belajar Dasar AI", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/0LZ05R193X65" },
  { title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/07Z6J4582XQR" },
  { title: "Belajar Dasar Pemrograman Web", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/L4PQ21LKOZO1" },
  { title: "Memulai Pemrograman dengan Kotlin", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/L4PQE4GM7PO1" },
];

// Access key Web3Forms — daftar gratis di https://web3forms.com (cukup masukkan
// email, key dikirim ke email Anda), lalu tempel di sini. Selama masih kosong,
// form kontak otomatis memakai fallback mailto (buka aplikasi email pengunjung).
export const WEB3FORMS_ACCESS_KEY = "7bb7e3c8-13c0-4f0d-8182-f70c06e5fd18";

// Badge peran yang muncul di hero.
export const heroBadges = [
  "Backend",
  "Spring Boot",
  "Security / JWT",
  "Open Source",
] as const;

// Nilai cadangan (fallback) — dipakai HANYA kalau belum pernah ada data live
// tersimpan di cache (mis. kunjungan pertama + langsung kena rate limit).
export type LanguageStat = { name: string; count: number; pct: number };

export const staticSnapshot = {
  publicRepos: 24,
  followers: 11,
  following: 20,
  createdYear: 2021,
  name: profile.name,
  avatar: profile.avatar,
  bio: null as string | null,
  location: profile.location as string | null,
  // Distribusi bahasa cadangan (dari snapshot repo terakhir).
  languages: [
    { name: "Java", count: 4, pct: 33 },
    { name: "Dart", count: 3, pct: 25 },
    { name: "PHP", count: 2, pct: 17 },
    { name: "JavaScript", count: 1, pct: 8 },
    { name: "TypeScript", count: 1, pct: 8 },
    { name: "C++", count: 1, pct: 8 },
  ] as LanguageStat[],
};

// Label + urutan kartu statistik (nilainya diisi dari data live / cache).
export const statFields = [
  { key: "publicRepos", label: "Repositori" },
  { key: "followers", label: "Followers" },
  { key: "following", label: "Following" },
  { key: "createdYear", label: "Di GitHub sejak" },
] as const;

export type Tech = {
  name: string;
  detail: string;
  level: "Utama" | "Mahir" | "Familiar";
};

// Diurutkan dari yang paling dominan di portofolio.
export const techStack: Tech[] = [
  { name: "Java", detail: "Bahasa utama — fondasi dari hampir semua proyek backend", level: "Utama" },
  { name: "Spring Boot", detail: "REST API, scheduling, dependency injection", level: "Utama" },
  { name: "Security / JWT", detail: "Autentikasi token, TOTP / 2FA", level: "Mahir" },
  { name: "Flutter / Dart", detail: "Aplikasi mobile lintas platform", level: "Mahir" },
  { name: "Laravel / PHP", detail: "Aplikasi web & CRUD", level: "Familiar" },
  { name: "React / TypeScript", detail: "Frontend modern (repo ini ✨)", level: "Familiar" },
];

export type Project = {
  name: string;
  description: string;
  language: string;
  highlight: string;
  stars?: number;
};

export const featuredProjects: Project[] = [
  {
    name: "totp",
    description:
      "Implementasi Time-based One-Time Password (TOTP) di Java — algoritma di balik kode 2FA seperti Google Authenticator. Menghasilkan & memverifikasi kode sekali pakai berbasis waktu.",
    language: "Java",
    highlight: "Keamanan / 2FA",
    stars: 1,
  },
];

// "Penilaian" — kesan terhadap profil berdasarkan pola repositori.
export const assessment = {
  intro:
    "Seorang developer backend-focused yang membangun fondasinya di atas ekosistem Java — terstruktur, memperhatikan keamanan, dan terus belajar hal baru.",
  points: [
    {
      title: "Backend yang kokoh",
      body: "Mayoritas proyek berdiri di atas Java & Spring Boot — dari REST API, penjadwalan, sampai struktur project template yang rapi.",
    },
    {
      title: "Sadar keamanan",
      body: "Punya ketertarikan nyata pada security: JWT, TOTP/2FA, dan template keamanan. Tidak sekadar bikin fitur, tapi memikirkan cara melindunginya.",
    },
    {
      title: "Polyglot & adaptif",
      body: "Tidak terkurung di satu bahasa — juga menyentuh Flutter/Dart untuk mobile dan PHP/Laravel untuk web. Mau belajar tools sesuai kebutuhan.",
    },
    {
      title: "Pembelajar konsisten",
      body: "Banyak repo eksperimen dan 'belajar-*', plus eksplorasi proyek fintech open-source (Apache Fineract, Mifos X). Selalu mencoba ide baru.",
    },
  ],
};
