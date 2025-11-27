import React, { useState } from "react";
import "./News.css";
import { useLanguage } from "../../contexts/LanguageContext";
import Slider from "./Slider";

function News() {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [err, setErr] = useState({});

  const validar = () => {
    const newErr = {};

    if (!email) {
      newErr.email = "Necessary";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email)) {
      newErr.email = "Needs format";
    }

    if (!name.trim()) {
      newErr.name = "Necessary";
    }

    setErr(newErr);

    return Object.keys(newErr).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validar()) return;

    const data = { email, name };

    try {
      const res = await fetch("https://backend-vdsr.onrender.com/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("Respuesta del servidor: ", result);
    } catch (error) {
      console.log("Error al enviar: ", error);
    }

    setEmail("");
    setName("");
    setErr({});
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-form"
              placeholder={t("news.form.input1")}
            />
          </div>
          {err.email && <span>{err.email}</span>}
          <div className="input">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-form"
              placeholder={t("news.form.input2")}
            />
          </div>
          {err.name && <span>{err.name}</span>}
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
