import React, { useState } from "react";
import "./News.css";
import { useLanguage } from "../../contexts/LanguageContext";
import Slider from "./Slider";

function News() {
  const { t } = useLanguage();

  const [nombre, setNombre ] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Correo: ", correo)
    console.log("Nombre: ", nombre);
  }

  return (
    <div className="news-container">
      <div className="news-form">
        <h3>{t("news.title")}</h3>
        <p>{t("news.text")}</p>
        <form onSubmit={handleSubmit} className="form">
  <div className="input">
    <input
      type="text"
      value={correo}
      onChange={(e) => setCorreo(e.target.value)}
      className="input-form"
      placeholder={t("news.form.input1")}
    />
  </div>
  <div className="input">
    <input
      type="text"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      className="input-form"
      placeholder={t("news.form.input2")}
    />
  </div>
  <div className="button-border">
    <button type="submit" className="button-form">{t("news.button")}</button>
  </div>
</form>

      </div>
      <div className="news-info">
        <Slider />
      </div>
    </div>
  );
}

export default News;
