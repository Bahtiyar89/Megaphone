import React from "react";
import { Carousel } from "react-responsive-carousel";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
        showStatus={true}
        showIndicators={true}
        infiniteLoop={true}
        showThumbs={false}
        useKeyboardArrows={true}
        autoPlay={true}
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
            src="/assets/images/home/66.jpeg"
          />
        </div>
      </Carousel>

      <Product />
    </div>
  );
};

export default Home;
