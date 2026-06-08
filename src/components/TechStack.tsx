import { techStack, type TechLevel } from "../data/profile";
import { useLang } from "../i18n/languageContext";
import SectionTitle from "./SectionTitle";

const levelStyle: Record<TechLevel, string> = {
  primary: "border-leaf/50 bg-leaf/10 text-leaf",
  proficient: "border-mint/40 bg-mint/10 text-mint",
  familiar: "border-line bg-line text-mist",
};

export default function TechStack() {
  const { t } = useLang();

  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
      <SectionTitle kicker={t.tech.kicker} title={t.tech.title} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech, i) => (
          <div
            key={tech.name}
            className="glass group relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-leaf/0 blur-2xl transition group-hover:bg-leaf/20" />
            <div className="relative flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-fog">
                {tech.name}
              </h3>
              <span
                className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${levelStyle[tech.level]}`}
              >
                {t.tech.levels[tech.level]}
              </span>
            </div>
            <p className="relative mt-2 text-sm leading-relaxed text-mist">
              {t.tech.details[tech.name]}
            </p>
            <span className="relative mt-3 block font-mono text-xs text-leaf/50">
              0{i + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
