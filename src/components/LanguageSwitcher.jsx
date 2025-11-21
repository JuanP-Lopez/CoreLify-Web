import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import MX from "../assets/icons/Mexico.svg";
import USA from "../assets/icons/UnitedStates.svg";


const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  const toggle = () => {
    setLang(prev => (prev === "es" ? "en" : "es"));
  };

  const switcherStyle = {
    backgroundImage: `url(${lang === "es" ? MX : USA})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "48px",
    height: "28px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.3s ease, border-color 0.3s ease",
  };

  return (
    <button onClick={toggle} aria-label="Cambiar idioma" style={switcherStyle}></button>
  );
};

export default LanguageSwitcher;
