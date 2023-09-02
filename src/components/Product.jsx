import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";
import DATA from "../Data/ruData";

const Product = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    // Regex expression to remove all characters which are NOT alphanumeric
    //let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

    // Appending the phone number to the URL
    let url = `https://web.whatsapp.com/send?phone=${"+905526522589"}`;

    // Appending the message to the URL by encoding it
    url += `&text=${encodeURI("message")}&app_absent=0`;
    window.open(url);
  };

  const onSubmitTelegram = (e) => {
    e.preventDefault();

    // Regex expression to remove all characters which are NOT alphanumeric
    //let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

    // Appending the phone number to the URL
    let url = `https://web.telegram.org/a/#-/@bahaist`;

    // Appending the message to the URL by encoding it
    // url += `&text=${encodeURI("message")}&app_absent=0`;
    window.open(url);
  };
  const cardItem = (item) => {
    return (
      <>
        <div class="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
          <NavLink to={`/products/${item.id}`}>
            <img src={item.img} class="card-img-top" alt={item.title} />
            <div class="card-body text-center">
              <h5 class="card-title">{item.title}</h5>
              <p className="lead">{item.price} тг</p>
            </div>
          </NavLink>

          <Modal
            size="mini"
            dimmer="blurring"
            style={{ position: "relative" }}
            onClose={() => setOpenModal(false)}
            onOpen={() => setOpenModal(true)}
            open={openModal}
            trigger={<div class="btn btn-outline-primary">{t("buy_now")}</div>}
          >
            <Modal.Header>{t("buy_now")}</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <form>
                  <div class="mb-3">
                    <label for="exampleForm" class="form-label">
                      {t("name_surname")}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleForm"
                      placeholder="Феррух Мансуров"
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

                  <div>
                    <button type="submit" class="btn btn-outline-primary">
                      {t("send_message")}
                    </button>

                    <img
                      onClick={onSubmit}
                      style={{ marginLeft: 10, cursor: "pointer" }}
                      src="/assets/images/whatsapp.png"
                      alt="Contact Us"
                      height="35px"
                      width="35px"
                    />

                    <img
                      onClick={onSubmitTelegram}
                      style={{ marginLeft: 10, cursor: "pointer" }}
                      src="/assets/images/telegram.png"
                      alt="Contact Us"
                      height="35px"
                      width="35px"
                    />
                  </div>
                </form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1> {t("products")}</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
