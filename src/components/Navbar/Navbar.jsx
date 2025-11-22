import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher";
import "./Navbar.css";

function Navbar({scrollSection}) {
  const { t } = useLanguage();
  return (
    <div className="navbar-container">
      <div className="switches">
          <LanguageSwitcher />
      </div>
      <ul className="navbar-menu">
        <li onClick={() => scrollSection("home")}>{t("navbar.opc1")}</li>
        <li onClick={() => scrollSection("info")}>{t("navbar.opc2")}</li>
        <li onClick={() => scrollSection("form")}>{t("navbar.opc3")}</li>
      </ul>
    </div>
  );
}

export default Navbar;
