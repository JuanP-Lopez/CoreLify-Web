import React, { useState } from "react";
import "./News.css";
import { useLanguage } from "../../contexts/LanguageContext";
import Slider from "./Slider";

function News() {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, name };

    try {
      const res = await fetch("https://backend-vdsr.onrender.com/api/news", {
        method : "POST",
        headers : { "Content-Type": "application/json" },
        body : JSON.stringify(data),
      });

      const result = await res.JSON();
      console.log("Respuesta del servidor: ", result);

    } catch (error) {
      console.log("Error al enviar: ", error)
    }
  };

  return (
    <div className="news-container">
      <div className="news-form">
        <h3>{t("news.title")}</h3>
        <p>{t("news.text")}</p>
        <form onSubmit={handleSubmit} className="form">
          <div className="input">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-form"
              placeholder={t("news.form.input1")}
            />
          </div>
          <div className="input">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-form"
              placeholder={t("news.form.input2")}
            />
          </div>
          <div className="button-border">
            <button type="submit" className="button-form">
              {t("news.button")}
            </button>
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
