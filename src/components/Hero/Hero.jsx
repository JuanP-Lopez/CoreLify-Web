import React from "react";
import "./Hero.css";
import { useLanguage } from "../../contexts/LanguageContext";
import CoreLifyScreens from "../../assets/images/CoreLify_ScreensBanner.png"

function Hero() {
  const { t } = useLanguage();
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-text">
            <h1>{t("hero.title")}</h1>
            <p>{t("hero.subtitle")}</p>
          </div>
        </div>

        <div className="hero-right">
          <img className="hero-image" src={CoreLifyScreens} alt="Visual CoreLify" />
        </div>
      </div>
      {/*
      <div className="hero-btn-container">
        <button className="hero-button">{t("hero.button")}</button>
      </div>
      */}
    </div>
  );
}

export default Hero;
