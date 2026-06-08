// Kamus teks dwibahasa (Indonesia & English). Bentuk `id` & `en` HARUS identik
// supaya type-safe — `en` di-assert bertipe sama dengan `id`.

const id = {
  nav: {
    about: "Tentang",
    skills: "Skills",
    languages: "Bahasa",
    projects: "Proyek",
    certificates: "Sertifikat",
    contact: "Kontak",
  },
  hero: {
    open: "Terbuka untuk kolaborasi",
    tagline:
      "Membangun backend yang kokoh, aman, dan rapi dengan Java & Spring Boot.",
    badges: ["Backend", "Spring Boot", "Security / JWT", "Open Source"],
    viewProjects: "Lihat Proyek",
    contactMe: "Hubungi Saya",
  },
  stats: {
    repos: "Repositori",
    followers: "Followers",
    following: "Following",
    since: "Di GitHub sejak",
    live: "Data live dari GitHub · diperbarui baru saja",
    cached: (rel: string) => `Mode hemat (rate limit) · data terakhir ${rel}`,
    loading: "Mengambil data dari GitHub…",
    static: "Menampilkan data contoh",
  },
  about: {
    kicker: "Tentang",
    title: "Halo, saya Rohesa 👋",
    bio: "Backend Developer di PT Digital Amore Kriyanesia (DAK). Saya fokus membangun REST API dan sistem yang aman menggunakan Java & Spring Boot, dengan minat khusus pada keamanan aplikasi (JWT & 2FA). Di luar itu saya juga membangun aplikasi mobile dan web, serta terus belajar teknologi baru.",
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
  },
  tech: {
    kicker: "Tech Stack",
    title: "Yang Saya Pakai",
    levels: { primary: "Utama", proficient: "Mahir", familiar: "Familiar" },
    details: {
      Java: "Bahasa utama — fondasi dari hampir semua proyek backend",
      "Spring Boot": "REST API, scheduling, dependency injection",
      "Security / JWT": "Autentikasi token, TOTP / 2FA",
      "Flutter / Dart": "Aplikasi mobile lintas platform",
      "Laravel / PHP": "Aplikasi web & CRUD",
      "React / TypeScript": "Frontend modern (repo ini ✨)",
    } as Record<string, string>,
  },
  languages: {
    kicker: "Bahasa",
    title: "Distribusi Bahasa di GitHub",
    note: "* Dihitung dari bahasa utama tiap repositori publik (data live GitHub).",
  },
  projects: {
    kicker: "Proyek Unggulan",
    title: "Karya Terpilih",
    viewAll: "Lihat semua repositori di GitHub",
    items: {
      totp: {
        description:
          "Implementasi Time-based One-Time Password (TOTP) di Java — algoritma di balik kode 2FA seperti Google Authenticator. Menghasilkan & memverifikasi kode sekali pakai berbasis waktu.",
        highlight: "Keamanan / 2FA",
      },
    } as Record<string, { description: string; highlight: string }>,
  },
  certs: {
    kicker: "Sertifikat",
    title: "Belajar di Dicoding",
  },
  contact: {
    kicker: "Kontak",
    title: "Mari Terhubung",
    intro:
      "Punya proyek, pertanyaan, atau ingin berkolaborasi? Kirim pesan lewat form di samping, atau temukan saya di:",
    currentlyAt: "Saat ini bekerja di",
    companyDesc:
      "Software house & IT consulting yang membangun perangkat lunak modern untuk bisnis dan institusi.",
    namePlaceholder: "Nama",
    emailPlaceholder: "Email Anda",
    messagePlaceholder: "Tulis pesan Anda…",
    send: "Kirim Pesan",
    sending: "Mengirim…",
    successSent: "✓ Terima kasih! Pesan terkirim.",
    successMailto: "✓ Terima kasih! Aplikasi email Anda akan terbuka.",
    errorPrefix: "Gagal kirim",
    emailDirect: "Email langsung saja",
  },
  footer: {
    builtWith: "dibuat dengan React + TypeScript + Tailwind",
  },
  rel: {
    now: "baru saja",
    min: (n: number) => `${n} menit lalu`,
    hour: (n: number) => `${n} jam lalu`,
    day: (n: number) => `${n} hari lalu`,
  },
  ui: {
    toLight: "Mode terang",
    toDark: "Mode gelap",
  },
};

export type Strings = typeof id;

const en: Strings = {
  nav: {
    about: "About",
    skills: "Skills",
    languages: "Languages",
    projects: "Projects",
    certificates: "Certificates",
    contact: "Contact",
  },
  hero: {
    open: "Open to collaboration",
    tagline:
      "Building robust, secure, and clean backends with Java & Spring Boot.",
    badges: ["Backend", "Spring Boot", "Security / JWT", "Open Source"],
    viewProjects: "View Projects",
    contactMe: "Contact Me",
  },
  stats: {
    repos: "Repositories",
    followers: "Followers",
    following: "Following",
    since: "On GitHub since",
    live: "Live data from GitHub · updated just now",
    cached: (rel: string) => `Saving mode (rate limit) · last data ${rel}`,
    loading: "Fetching data from GitHub…",
    static: "Showing sample data",
  },
  about: {
    kicker: "About",
    title: "Hi, I'm Rohesa 👋",
    bio: "Backend Developer at PT Digital Amore Kriyanesia (DAK). I focus on building secure REST APIs and systems with Java & Spring Boot, with a special interest in application security (JWT & 2FA). Beyond that, I also build mobile and web apps, and keep learning new technologies.",
    intro:
      "A backend-focused developer who built his foundation on the Java ecosystem — structured, security-conscious, and always learning.",
    points: [
      {
        title: "Solid backend",
        body: "Most projects are built on Java & Spring Boot — from REST APIs and scheduling to clean project templates.",
      },
      {
        title: "Security-aware",
        body: "A genuine interest in security: JWT, TOTP/2FA, and security templates. Not just building features, but thinking about how to protect them.",
      },
      {
        title: "Polyglot & adaptable",
        body: "Not locked into one language — also works with Flutter/Dart for mobile and PHP/Laravel for web. Willing to learn tools as needed.",
      },
      {
        title: "Consistent learner",
        body: "Many experimental and 'belajar-*' repos, plus exploration of open-source fintech projects (Apache Fineract, Mifos X). Always trying new ideas.",
      },
    ],
  },
  tech: {
    kicker: "Tech Stack",
    title: "What I Use",
    levels: { primary: "Primary", proficient: "Proficient", familiar: "Familiar" },
    details: {
      Java: "Primary language — the foundation of almost every backend project",
      "Spring Boot": "REST APIs, scheduling, dependency injection",
      "Security / JWT": "Token authentication, TOTP / 2FA",
      "Flutter / Dart": "Cross-platform mobile apps",
      "Laravel / PHP": "Web apps & CRUD",
      "React / TypeScript": "Modern frontend (this repo ✨)",
    },
  },
  languages: {
    kicker: "Languages",
    title: "Language Distribution on GitHub",
    note: "* Computed from the primary language of each public repository (live GitHub data).",
  },
  projects: {
    kicker: "Featured Project",
    title: "Selected Work",
    viewAll: "View all repositories on GitHub",
    items: {
      totp: {
        description:
          "A Java implementation of Time-based One-Time Password (TOTP) — the algorithm behind 2FA codes like Google Authenticator. Generates and verifies time-based one-time codes.",
        highlight: "Security / 2FA",
      },
    },
  },
  certs: {
    kicker: "Certificates",
    title: "Learning on Dicoding",
  },
  contact: {
    kicker: "Contact",
    title: "Let's Connect",
    intro:
      "Have a project, a question, or want to collaborate? Send a message using the form, or find me on:",
    currentlyAt: "Currently working at",
    companyDesc:
      "A software house & IT consultancy building modern software for businesses and institutions.",
    namePlaceholder: "Name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Write your message…",
    send: "Send Message",
    sending: "Sending…",
    successSent: "✓ Thank you! Your message has been sent.",
    successMailto: "✓ Thank you! Your email app will open.",
    errorPrefix: "Failed to send",
    emailDirect: "Just email directly",
  },
  footer: {
    builtWith: "built with React + TypeScript + Tailwind",
  },
  rel: {
    now: "just now",
    min: (n: number) => `${n}m ago`,
    hour: (n: number) => `${n}h ago`,
    day: (n: number) => `${n}d ago`,
  },
  ui: {
    toLight: "Light mode",
    toDark: "Dark mode",
  },
};

export const dictionaries = { id, en };
export type Lang = keyof typeof dictionaries;
