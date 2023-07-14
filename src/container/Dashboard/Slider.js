import { Card } from "antd";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  textAlign: "center",
  background: "red",
  padding: "200px 0",
  fontSize: "30px",
};
const slideImages = [
  {
    url: "https://www.bookswagon.com/images/promotionimages/web/tarotcardWeb.jpg?v=1.8",
    caption: "Slide 4",
  },
  {
    url: "https://www.bookswagon.com/images/promotionimages/web/ExamWeb.jpg?v=1.8",
    caption: "Slide 5",
  },
  {
    url: "https://www.bookswagon.com/images/promotionimages/web/BussinessWeb.jpg?v=1.8",
    caption: "Slide 6",
  },
  {
    url: "https://www.bookswagon.com/images/promotionimages/web/tarotcardWeb.jpg?v=1.8",
    caption: "Slide 4",
  },
  {
    url: "https://www.bookswagon.com/images/promotionimages/web/ExamWeb.jpg?v=1.8",
    caption: "Slide 5",
  },
  {
    url: "https://www.bookswagon.com/images/promotionimages/web/BussinessWeb.jpg?v=1.8",
    caption: "Slide 6",
  },
];

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={false}
        autoplay={false}
        arrows={false}
        responsive={[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ]}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
           
              <img src={`${slideImage.url}`}  />
           
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slider;
