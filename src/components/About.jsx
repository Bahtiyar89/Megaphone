import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">{t("about_us")}</h1>
            <h3 className="mb-4">{t("why_us")}</h3>
            <p className="lead mb-4">
              Интернет магазин megaphone.kz предлагает вам мегафоны которые вам
              позволить облегчить вашу работу с публикой. Мы когда были
              студентами начиная с 2018 года со склада гаража продавали разные
              виды мегафонов. Набирая опыт решили продать только несколько видов
              рупора которые стоить по золотой середине между ценам и качеством.
              <h3>{t("how_we_work")}</h3>
              <p>{t("how_we_work_desc")}</p>
              <h3>{t("how_we_work")}</h3>
              <p>{t("why_your_store_desc")}</p>
              <h3>{t("belive_us")}</h3>
              <p>{t("belive_us_desc")}</p>
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
