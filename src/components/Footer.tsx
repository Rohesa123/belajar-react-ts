import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-fog">
            {profile.name}
          </p>
          <p className="mt-1 font-mono text-xs text-mist">{profile.role}</p>
        </div>

        <SocialLinks size="sm" />
      </div>

      <p className="mt-8 text-center font-mono text-xs text-mist/60">
        © {profile.joinedYear}–2026 · dibuat dengan React + TypeScript + Tailwind
      </p>
    </footer>
  );
}
