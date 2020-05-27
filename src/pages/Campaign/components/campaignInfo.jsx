import "font-awesome/css/font-awesome.min.css";
import React from "react";
import "../campaign.css";

export default class CampaignInfo extends React.Component {
  render() {
    return (
      <div id="mapBg">
        <img
          style={{ width: '100vw', height: '100vh'}}
          src={require("../../../assets/images/map_start_bg.svg")}
          alt="map"
        />
        <img
          style={{
            position: "absolute",
            top: "100vh",
            right: "10vw",
            zIndex: 100,
            width: "40vw",
          }}
          src={require("../../../assets/images/campaign_1.png")}
          alt="campaign"
        />
        <img
          style={{
            position: "absolute",
            top: "120vh",
            right: "15vw",
            zIndex: 101,
            height: "80vh",
          }}
          src={require("../../../assets/images/campaign_2.png")}
          alt="campaign"
        />
        <span id="leftInfo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <span id="rightInfo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
    );
  }
}
