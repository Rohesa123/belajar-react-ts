import { profile, heroBadges } from "../data/profile";
import { useGithub } from "../github/githubContext";
import SocialLinks from "./SocialLinks";

export default function ProfileHeader() {
  const { snapshot } = useGithub();
  const [firstName, ...rest] = snapshot.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <header id="top" className="relative overflow-hidden">
      {/* latar: grid + blob hijau yang menggumpal */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="animate-drift pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />
      <div className="animate-drift pointer-events-none absolute -right-10 top-40 h-80 w-80 rounded-full bg-mint/15 blur-3xl [animation-delay:4s]" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-[1.2fr_1fr] md:pt-44">
        {/* kiri: teks */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-leaf/10 px-3 py-1 text-xs font-medium text-leaf">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
            </span>
            Terbuka untuk kolaborasi
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-fog sm:text-6xl">
            {firstName}{" "}
            <span className="text-gradient">{lastName}</span>
          </h1>

          <p className="mt-3 font-mono text-sm text-leaf sm:text-base">
            {"<"} {profile.role} {"/>"}
          </p>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-mist md:mx-0">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {heroBadges.map((b) => (
              <span
                key={b}
                className="rounded-lg border border-white/10 bg-elevated/60 px-3 py-1 font-mono text-xs text-fog/80"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#proyek"
              className="rounded-xl bg-gradient-to-r from-lime to-mint px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-leaf/20 transition hover:scale-105"
            >
              Lihat Proyek
            </a>
            <a
              href="#kontak"
              className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-fog transition hover:border-leaf/50 hover:text-leaf"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="mt-6 flex justify-center md:justify-start">
            <SocialLinks size="sm" />
          </div>
        </div>

        {/* kanan: avatar dengan cincin berputar */}
        <div className="flex justify-center">
          <div className="relative h-60 w-60">
            <div className="animate-spin-slow absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent,#5cc878,#b6f36a,#34d8a0,transparent)] opacity-80 blur-[2px]" />
            <div className="animate-pulse-glow absolute inset-2 rounded-full bg-leaf/30 blur-2xl" />
            <img
              src={snapshot.avatar}
              alt={snapshot.name}
              className="animate-float absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-full border border-white/10 object-cover shadow-2xl"
            />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-elevated px-3 py-1 font-mono text-xs text-leaf shadow-lg">
              📍 {snapshot.location ?? profile.location}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
