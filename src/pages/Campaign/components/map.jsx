import "font-awesome/css/font-awesome.min.css";
import React from "react";
import "../campaign.css";
import { useSpring, animated } from "react-spring";

export default function Map(props) {
  const house = useSpring({
    opacity: props.index > 0 ? 1 : 0,
  });
  const school = useSpring({
    opacity: props.index > 10 ? 1 : 0,
  });
  const bus = useSpring({
    opacity: props.index > 20 ? 1 : 0,
  });
  const camp = useSpring({
    opacity: props.index > 30 ? 1 : 0,
  });
  return (
    <div id="mapBg">
      <img
        style={{ width: "100%", height: "100%" }}
        src={require("../../../assets/images/Campaign-03.png")}
        alt="map"
      />
      <animated.span id="house" style={house}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor ?
      </animated.span>
      <animated.span id="school" style={school}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor ?
      </animated.span>
      <animated.span id="bus" style={bus}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor ?
      </animated.span>
      <animated.span id="camp" style={camp}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor ?
      </animated.span>
    </div>
  );
}
