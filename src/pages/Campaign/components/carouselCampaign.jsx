import "font-awesome/css/font-awesome.min.css";
import React from "react";
import "../campaign.css";

export default class CarouselCampaign extends React.Component {
  render() {
    return (
      <div id="carouselContainer">
        <img
          src={require("../../../assets/images/Campaign-01.png")}
          alt="bg"
          id="imgStyle"
        />
      </div>
    );
  }
}
