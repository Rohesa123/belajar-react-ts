import { useEffect, useState, type ReactNode } from "react";
import { dictionaries, type Lang } from "./strings";
import { LANG_KEY, LanguageContext, readLang } from "./languageContext";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* abaikan */
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggleLang = () => setLangState((p) => (p === "id" ? "en" : "id"));

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t: dictionaries[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
