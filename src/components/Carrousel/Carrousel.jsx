import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import Phone from "./canvas/Phone";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import "./Cassousel.css";

function Carrousel() {
  const { t } = useLanguage();

  const slides = [
    {
      title: t("features.screen1.title"),
      text: t("features.screen1.text"),
      texture: "/images/Pantalla1-Inicio-Habits.png",
    },
    {
      title: t("features.screen2.title"),
      text: t("features.screen2.text"),
      texture: "/images/Pantalla2-Login.png",
    },
    {
      title: t("features.screen3.title"),
      text: t("features.screen3.text"),
      texture: "/images/PantallaRegister.png",
    },
  ];

  const [index, setIndex] = useState(0);

  const changeScreen = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="carrousel-container">
      <div className="circles">
        <div className="carrousel-box">
          <div className="carrousel">
            <div className="phone">
              <Canvas className="model-container">
                <Stage environment={"studio"}>
                  <OrbitControls />
                  <Phone texture={slides[index].texture} />
                </Stage>
              </Canvas>
            </div>
            <div className="text">
              <h4>{slides[index].title}</h4>
              <p>{slides[index].text}</p>
            </div>
          </div>
          <div className="screen-changer">
            <div className="button-container">
              <button onClick={changeScreen} className="button-screen">
                Cambiar pantalla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
