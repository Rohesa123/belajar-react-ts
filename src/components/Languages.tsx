import { useGithub } from "../github/githubContext";
import { useLang } from "../i18n/languageContext";
import SectionTitle from "./SectionTitle";

// Warna khas tiap bahasa (mirip GitHub linguist).
const langColor: Record<string, string> = {
  Java: "#e76f00",
  Dart: "#00b4ab",
  PHP: "#8993be",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  "C++": "#f34b7d",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Kotlin: "#a97bff",
  Python: "#3572A5",
};

const colorFor = (name: string) => langColor[name] ?? "#3ecf8e";

export default function Languages() {
  const { snapshot } = useGithub();
  const { t } = useLang();
  const langs = snapshot.languages;

  return (
    <section id="bahasa" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
      <SectionTitle kicker={t.languages.kicker} title={t.languages.title} />

      <div className="glass rounded-3xl p-6 sm:p-8">
        {/* bar gabungan */}
        <div className="flex h-3 w-full overflow-hidden rounded-full bg-line">
          {langs.map((l) => (
            <div
              key={l.name}
              style={{ width: `${l.pct}%`, backgroundColor: colorFor(l.name) }}
              className="h-full transition-all"
              title={`${l.name} · ${l.pct}%`}
            />
          ))}
        </div>

        {/* legend */}
        <div className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {langs.map((l) => (
            <div key={l.name} className="flex items-center gap-3">
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: colorFor(l.name) }}
              />
              <span className="text-sm font-medium text-fog">{l.name}</span>
              <span className="ml-auto font-mono text-sm text-mist">
                {l.pct}%
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-mist">{t.languages.note}</p>
      </div>
    </section>
  );
}
