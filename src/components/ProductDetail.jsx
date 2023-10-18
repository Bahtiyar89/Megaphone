import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Carousel } from "react-responsive-carousel";

import DATARU from "../Data/ruData";
import DATAKZ from "../Data/kzData";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { addItem, delItem } from "../redux/actions/index";

const ProductDetail = () => {
  const { t, i18n } = useTranslation();
  console.log("i18n: ", i18n.language);
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  {
    /* Now we need a product id which is pass from the product page. */
  }
  const proid = useParams();

  let proDetail;
  if (i18n.language === "kz") {
    proDetail = DATAKZ.filter((x) => x.id == proid.id);
  } else {
    proDetail = DATARU.filter((x) => x.id == proid.id);
  }

  const product = proDetail[0];
  console.log(product.id, "product");

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

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      style={{ height: "500px", width: "500px" }}
      src="/assets/detailgreen/arka.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{ height: "500px", width: "500px" }}
      src="/assets/detailgreen/arka2.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{ height: "500px", width: "500px" }}
      src="/assets/detailgreen/arka3.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{ height: "500px", width: "500px" }}
      src="/assets/detailgreen/arka4.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{ height: "500px", width: "500px" }}
      src="/assets/detailgreen/arka5.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{ height: "500px", width: "500px" }}
      src="/assets/detailgreen/arka6.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{ height: "500px", width: "500px" }}
      src="/assets/detailgreen/arka7.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{ height: "500px", width: "500px" }}
      src="/assets/detailgreen/arka8.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{ height: "500px", width: "500px" }}
      src="/assets/detailgreen/arka9.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{ height: "500px", width: "500px" }}
      src="/assets/detailgreen/arka10.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{ height: "500px", width: "500px" }}
      src="/assets/detailgreen/arka11.jpeg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            {product.id == 1 ? (
              <div style={{ height: "500px", width: "500px" }}>
                <AliceCarousel
                  autoPlay
                  infinite
                  autoPlayInterval={1000}
                  items={items}
                />
              </div>
            ) : (
              <Carousel
                showArrows={true}
                showStatus={true}
                showIndicators={true}
                infiniteLoop={true}
                showThumbs={false}
                useKeyboardArrows={true}
                autoPlay={false}
              >
                <div>
                  <img
                    style={{ height: "500px", width: "500px" }}
                    src="/assets/images/home/11.jpeg"
                  />
                </div>
                <div>
                  <img
                    style={{ height: "500px", width: "500px" }}
                    src="/assets/images/home/22.jpeg"
                  />
                </div>
                <div>
                  <img
                    style={{ height: "500px", width: "500px" }}
                    src="/assets/images/home/33.jpeg"
                  />
                </div>
                <div>
                  <img
                    style={{ height: "500px", width: "500px" }}
                    src="/assets/images/home/44.jpeg"
                  />
                </div>
                <div>
                  <img
                    style={{ height: "500px", width: "500px" }}
                    src="/assets/images/home/55.jpeg"
                  />
                </div>
                <div>
                  <img
                    style={{ height: "500px", width: "500px" }}
                    src="/assets/images/home/red/1.jpeg"
                  />
                </div>
              </Carousel>
            )}
          </div>
          <div
            style={{ zIndex: 1 }}
            className="col-md-6 d-flex flex-column justify-content-center"
          >
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">{product.price} тг</h2>
            <p className="lead">{product.subTitle}</p>
            <p className="lead">{product.desc}</p>
            <p className="lead">{product.desc1}</p>
            <p className="lead">{product.desc2}</p>
            <p className="lead">{product.desc3}</p>
            <p className="lead">{product.desc4}</p>
            <p className="lead">{product.desc5}</p>
            <p className="lead">{product.workDesc}</p>
            <p className="lead">{product.wd}</p>
            <p className="lead">{product.wd1}</p>
            <p className="lead">{product.wd2}</p>
            <p className="lead">{product.wd3}</p>
            <p className="lead">{product.wd4}</p>
            <p className="lead">{product.size}</p>
            <p className="lead">{product.sized}</p>
            <p className="lead">{product.sized1}</p>
            <p className="lead">{product.sized2}</p>
            <p className="lead">{product.sized3}</p>
            <p className="lead">{product.sized4}</p>
            <p className="lead">{product.sized5}</p>
            <p className="lead">{product.sized6}</p>
            <p className="lead">{product.sized7}</p>
            <p className="lead">{product.sized8}</p>
            <p className="lead">{product.sized9}</p>
            <p className="lead">{product.sized10}</p>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
