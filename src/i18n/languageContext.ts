import { createContext, useContext } from "react";
import { dictionaries, type Lang, type Strings } from "./strings";

export const LANG_KEY = "lang";

export type LanguageState = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: Strings;
};

export const LanguageContext = createContext<LanguageState>({
  lang: "id",
  setLang: () => {},
  toggleLang: () => {},
  t: dictionaries.id,
});

export function useLang(): LanguageState {
  return useContext(LanguageContext);
}

export function readLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "id" || saved === "en") return saved;
  } catch {
    /* abaikan */
  }
  return "id"; // default Indonesia
}
