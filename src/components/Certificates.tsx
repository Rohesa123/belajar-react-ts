import { certificates } from "../data/profile";
import { useLang } from "../i18n/languageContext";
import SectionTitle from "./SectionTitle";

export default function Certificates() {
  const { t } = useLang();
  return (
    <section id="sertifikat" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
      <SectionTitle kicker={t.certs.kicker} title={t.certs.title} />

      <div className="grid gap-4 sm:grid-cols-2">
        {certificates.map((c) => (
          <a
            key={c.url}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1"
          >
            {/* ikon medali */}
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-leaf/20 to-mint/20 text-leaf ring-1 ring-leaf/30">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="9" r="6" />
                <path d="M9 14.5 7.5 22 12 19.5 16.5 22 15 14.5" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display font-semibold leading-snug text-fog group-hover:text-leaf">
                {c.title}
              </h3>
              <p className="mt-0.5 text-xs text-mist">{c.issuer}</p>
            </div>
            <span className="text-mist transition group-hover:translate-x-1 group-hover:text-leaf">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
