import { assessment, profile } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function AboutMe() {
  return (
    <section id="tentang" className="relative scroll-mt-24 py-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionTitle kicker="Tentang" title="Halo, saya Rohesa 👋" />

        <p className="mb-6 max-w-2xl text-lg leading-relaxed text-fog/85">
          {profile.bio}
        </p>
        <p className="mb-10 max-w-2xl border-l-2 border-leaf/40 pl-4 text-base italic leading-relaxed text-mist">
          {assessment.intro}
        </p>

        {/* bento grid asimetris */}
        <div className="grid gap-4 md:grid-cols-2">
          {assessment.points.map((p, i) => (
            <div
              key={p.title}
              className={`glass group relative overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 ${
                i === 0 ? "md:row-span-1" : ""
              }`}
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-lime via-leaf to-mint opacity-70" />
              <span className="font-mono text-xs text-leaf/60">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-fog">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
