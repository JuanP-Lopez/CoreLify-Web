import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./Card.css";

function CardsHeader() {
  const { t } = useLanguage();
  return (
    <div className="cards-header">
        <h2>{t("cards.title")}</h2>
    </div>
  );
}

export default CardsHeader;
