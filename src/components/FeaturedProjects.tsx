import { featuredProjects, profile } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function FeaturedProjects() {
  return (
    <section id="proyek" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
      <SectionTitle kicker="Proyek Unggulan" title="Karya Terpilih" />

      <div className="grid gap-5">
        {featuredProjects.map((p) => (
          <a
            key={p.name}
            href={`${profile.githubUrl}/${p.name}`}
            target="_blank"
            rel="noreferrer"
            className="glass group relative overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 sm:p-9"
          >
            {/* glow dekoratif */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-leaf/0 blur-3xl transition group-hover:bg-leaf/15" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
              {/* ikon */}
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-leaf/20 to-mint/20 text-leaf ring-1 ring-leaf/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
                  <rect x="4" y="10" width="16" height="10" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  <circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-mono text-xl font-semibold text-fog group-hover:text-leaf">
                    {p.name}
                  </h3>
                  {p.stars ? (
                    <span className="font-mono text-sm text-mist">★ {p.stars}</span>
                  ) : null}
                  <span className="ml-auto text-mist transition group-hover:translate-x-1 group-hover:text-leaf">
                    ↗
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf/15 px-3 py-1 font-medium text-leaf">
                    <span className="h-2 w-2 rounded-full bg-leaf" />
                    {p.language}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-fog/70">
                    {p.highlight}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={`${profile.githubUrl}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-fog transition hover:border-leaf/50 hover:text-leaf"
        >
          Lihat semua repositori di GitHub
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
