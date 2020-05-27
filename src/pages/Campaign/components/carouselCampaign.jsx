import "font-awesome/css/font-awesome.min.css";
import React from "react";
import "../campaign.css";

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

export default class CarouselCampaign extends React.Component {
  render() {
    return (
      <div id="carouselContainer">
        <img
          src={require("../../../assets/images/tree_bg.png")}
          alt="bg"
          id="imgStyle"
        />
        <span id="title">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </span>
        <div id="filterPic" />
      </div>
    );
  }
}
