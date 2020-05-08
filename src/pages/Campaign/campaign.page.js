import React from "react";
import "./campaign.css";
import FixedButton from "../../shared/fixedButton/fixedBtn";
import { Carousel } from "antd";

const bigImg = [
  {
    img: "tree_bg.png",
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
  },
  {
    img: "tree_bg.png",
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
  },
  {
    img: "tree_bg.png",
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
  },
  {
    img: "tree_bg.png",
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
  },
];

function Campaign(props) {
  return (
    <div id="pageBg">
      <FixedButton from="campaign" />
      <div>
        {/* <div id="carouselContainer">
          <img
            src={require("../../assets/images/tree_bg.png")}
            alt="bg"
            id="imgStyle"
          />
          <span id="title">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque
          </span>
          <div id="filterPic" />
        </div> */}
        <Carousel autoplay>
          {bigImg &&
            bigImg.length > 0 &&
            bigImg.map((item) => (
              <div id="carouselContainer">
                <img
                  src={require(`../../assets/images/${item.img}`)}
                  alt="bg"
                  id="imgStyle"
                />
                <span id="title">{item.title}</span>
                <div id="filterPic" />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Campaign;
