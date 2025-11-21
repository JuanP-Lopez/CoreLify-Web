import React, { createContext, useContext, useState, useMemo, useEffect, useCallback } from "react";
import es from "../locales/es.json";
import en from "../locales/en.json";

const translations = { es, en };
const STORAGE_KEY = "corelify_lang";

const LanguageContext = createContext();

/**
 * LanguageProvider envuelve la app y provee:
 * - lang: 'es' | 'en'
 * - setLang: función para cambiar idioma
 * - t: función t(key) para obtener la traducción
 */
export const LanguageProvider = ({ children, defaultLang = "es" }) => {
  const [lang, setLang] = useState(() => {
    // Intentar recuperar preferencia guardada
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved || defaultLang;
    } catch {
      return defaultLang;
    }
  });

  // Guardar cambios en localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  // Memorizar el diccionario actual para evitar recomputos
  const dict = useMemo(() => translations[lang] || {}, [lang]);

  // t() busca la clave en el diccionario. Soporta claves anidadas con puntos: "hero.title"
  const t = useCallback(
    (key, fallback = "") => {
      if (!key) return fallback;
      const parts = key.split(".");
      let cur = dict;
      for (let p of parts) {
        if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
          cur = cur[p];
        } else {
          return fallback || key; // devuelve key si no existe traducción
        }
      }
      return typeof cur === "string" ? cur : fallback || key;
    },
    [dict]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }
  return ctx;
};
