import "font-awesome/css/font-awesome.min.css";
import React from "react";
import "../campaign.css";

export default class Map extends React.Component {
  render() {
    return (
      <div id="mapBg">
        <img
          style={{ width: "100%", height: "100%" }}
          src={require("../../../assets/images/map_bg.svg")}
          alt="map"
        />
      </div>
    );
  }
}
