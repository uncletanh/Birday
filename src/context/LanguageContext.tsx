"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import vi from "@/i18n/vi.json";
import en from "@/i18n/en.json";
import zh from "@/i18n/zh.json";

export type Language = "vi" | "en" | "zh";

const dictionaries = {
  vi,
  en,
  zh,
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isReady: boolean;
  setReady: (ready: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("vi");
  const [isReady, setReady] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("app_lang") as Language;
    if (saved && ["vi", "en", "zh"].includes(saved)) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("app_lang", newLang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let current: any = dictionaries[lang];
    for (const k of keys) {
      if (current[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      current = current[k];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t, isReady, setReady }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
