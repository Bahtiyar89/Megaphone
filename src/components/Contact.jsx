import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>{t("contacts")}</h1>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="/assets/images/contact.png"
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  {t("name_surname")}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="John Smith"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  {t("phone_number")}
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+7 777 777 7777"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  {t("message")}
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                {t("send_message")}
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <p className="lead mb-4">
            Алматы адрес склада: Улица Алтын Орда, 6/37
            <br /> Шымкент адрес склада: Улица Тажибаева,
            <br /> Туркестан адрес склада: Село Карашык. Улица А. Наваи, 45Б
            <br /> Номер телефона: +77017057163 (ватсап) +77057291073
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
