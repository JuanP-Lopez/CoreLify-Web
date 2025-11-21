import React, { useState } from "react";
import "./Slider.css";
import { slidesData } from "./SlidesData";
import { useLanguage } from "../../../contexts/LanguageContext";

function Slider() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToImage = (direction) => {
    setCurrentIndex((curr) => {
      if (direction === "prev") {
        return curr === 0 ? slidesData.length - 1 : curr - 1;
      } else {
        return curr === slidesData.length - 1 ? 0 : curr + 1;
      }
    });
  };

  return (
    <div className="slider-root">
      <button
        className="slider-arrow slider-arrow-left"
        onClick={() => scrollToImage("prev")}
        aria-label="Previous"
      >
        &#10096;{" "}
      </button>
      <button
        className="slider-arrow slider-arrow-right"
        onClick={() => scrollToImage("next")}
        aria-label="Next"
      >
        &#10097;
      </button>

      <div className="slider-viewport">
        <ul
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            scrollBehavior: "smooth",
          }}
        >
          {slidesData.map((item) => (
            <li key={item.id} className="slider-slide">
              <img src={item.url} alt={item.text} />
              <div className="slider-text">
                <div style={{ width: '14px', height: 'auto', background: item.box}}></div>
                <p>{t(item.text)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Slider;
