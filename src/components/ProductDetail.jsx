import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
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
  console.log(product);

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
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

            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
