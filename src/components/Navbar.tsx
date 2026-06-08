import { profile } from "../data/profile";

const links = [
  { label: "Tentang", href: "#tentang" },
  { label: "Skills", href: "#skills" },
  { label: "Proyek", href: "#proyek" },
  { label: "Sertifikat", href: "#sertifikat" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div className="glass flex w-full max-w-4xl items-center justify-between rounded-2xl px-5 py-3 shadow-lg shadow-black/30">
        <a href="#top" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-lime to-mint text-sm font-bold text-ink">
            R
          </span>
          <span className="hidden text-fog sm:inline">Rohesa</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-3">
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
