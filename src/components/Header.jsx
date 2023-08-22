import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "../i18n";

const Header = () => {
  const [lang, setLang] = useState("kz");
  const { t, i18n } = useTranslation();
  const countryOptions = [
    { key: "kz", value: "kz", flag: "kz", text: "Kazakhstan" },
    { key: "ru", value: "ru", flag: "ru", text: "Русский" },
  ];

  const handleChange = (e, { value }) => {
    setLang(value);
    i18n.changeLanguage(value);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  MEGAPHONE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  {t("products")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  {t("about_us")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  {t("contacts")}
                </NavLink>
              </li>
              <li className="nav-item">
                <Dropdown
                  defaultValue={lang}
                  selection
                  options={countryOptions}
                  onChange={handleChange}
                />
              </li>
            </ul>
          </div>

          <NavLink className="navbar-brand mx-auto fw-bold" to="/">
            megaphone.kz
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
