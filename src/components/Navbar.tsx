import { profile } from "../data/profile";
import { useLang } from "../i18n/languageContext";
import { useTheme } from "../theme/themeContext";

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { label: t.nav.about, href: "#tentang" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#proyek" },
    { label: t.nav.certificates, href: "#sertifikat" },
    { label: t.nav.contact, href: "#kontak" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div className="glass flex w-full max-w-4xl items-center justify-between rounded-2xl px-5 py-3 shadow-lg shadow-black/20">
        <a href="#top" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-lime to-mint text-sm font-bold text-ink">
            R
          </span>
          <span className="hidden text-fog sm:inline">Rohesa</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-2.5 py-1.5 text-sm text-mist transition hover:text-fog"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* toggle bahasa */}
          <button
            onClick={toggleLang}
            title={lang === "id" ? "Switch to English" : "Ganti ke Indonesia"}
            className="rounded-lg border border-line px-2.5 py-1.5 font-mono text-xs font-semibold text-fog transition hover:border-leaf/50 hover:text-leaf"
          >
            {lang === "id" ? "ID" : "EN"}
          </button>

          {/* toggle tema */}
          <button
            onClick={toggleTheme}
            title={theme === "dark" ? t.ui.toLight : t.ui.toDark}
            aria-label={theme === "dark" ? t.ui.toLight : t.ui.toDark}
            className="grid h-8 w-8 place-items-center rounded-lg border border-line text-fog transition hover:border-leaf/50 hover:text-leaf"
          >
            {theme === "dark" ? (
              // ikon matahari
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
              </svg>
            ) : (
              // ikon bulan
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-leaf/15 px-3 py-1.5 text-sm font-semibold text-leaf ring-1 ring-leaf/30 transition hover:bg-leaf/25"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
