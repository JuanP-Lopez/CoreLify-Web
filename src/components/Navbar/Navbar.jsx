import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher";
import "./Navbar.css";

function Navbar() {
  const { t } = useLanguage();
  return (
    <div className="navbar-container">
      <div className="switches">
          <LanguageSwitcher />
      </div>
      <ul className="navbar-menu">
        <li>{t("navbar.opc1")}</li>
        <li>{t("navbar.opc2")}</li>
        <li>{t("navbar.opc3")}</li>
      </ul>
    </div>
  );
}

export default Navbar;
