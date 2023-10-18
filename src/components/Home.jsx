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
            src="/assets/images/home/mainpage/1.jpeg"
          />
        </div>
        <div>
          <img
            style={{ height: "500px", width: "500px" }}
            src="/assets/images/home/mainpage/2.jpeg"
          />
        </div>
        <div>
          <img
            style={{ height: "500px", width: "500px" }}
            src="/assets/images/home/mainpage/3.jpeg"
          />
        </div>
        <div>
          <img
            style={{ height: "500px", width: "500px" }}
            src="/assets/images/home/mainpage/4.jpeg"
          />
        </div>
        <div>
          <img
            style={{ height: "500px", width: "500px" }}
            src="/assets/images/home/mainpage/5.jpeg"
          />
        </div>
        <div>
          <img
            style={{ height: "500px", width: "500px" }}
            src="/assets/images/home/mainpage/6.jpeg"
          />
        </div>
        <div>
          <img
            style={{ height: "500px", width: "500px" }}
            src="/assets/images/home/mainpage/7.jpeg"
          />
        </div>
      </Carousel>

      <Product />
    </div>
  );
};

export default Home;
