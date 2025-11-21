import React from "react";
import "./Card.css";
import { useLanguage } from "../../contexts/LanguageContext";

function Card({icon, title, text, variant}) {
  const { t } = useLanguage();
  return (
    <div className={`card-container ${variant}`}>
      <div className="card-info">
        <img src={icon} alt={icon}/>
        <h3>{t(title)}</h3>
        <p>
          {t(text)}
        </p>
      </div>
    </div>
  );
}

export default Card;
