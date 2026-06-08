import { profile } from "../data/profile";
import { useLang } from "../i18n/languageContext";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative border-t border-line py-12">
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
        © {profile.joinedYear}–2026 · {t.footer.builtWith}
      </p>
    </footer>
  );
}
