import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { Link } from "react-router-dom";
import "./bottomInfo.css";

const socialContact = [
  {
    link: "https://www.fb.com/MuaHeXanh.KhoaHocTuNhien",
    iconSrc: "icon-facebook.png",
  },
  {
    link: "https://www.youtube.com/user/BanTruyenThongMAT",
    iconSrc: "icon-youtube.png",
  },
  {
    link: "https://www.behance.net/truyenthongban",
    iconSrc: "icon-behance.png",
  },
];

export default class BottomInfo extends React.Component {
  render() {
    return (
      <div id="bottomContainer">
        <div id="bottomDashed">
          <div id="iconContainer">
            {socialContact.map((item, index) => (
              <a
                key={index.toString()}
                style={{ padding: "1vw" }}
                href={item.link}
                target="_black"
              >
                <img
                  id="icon"
                  src={require(`../../assets/icon/${item.iconSrc}`)}
                  alt="icon"
                />
              </a>
            ))}
          </div>
          <span>© DAU/GIAU 2020. All Rights Reserved.</span>
          <span>DESIGN BY MAT PRODUCTION.</span>
          <Link
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img
              src={require("../../assets/icon/back_to_top.svg")}
              alt="bg"
              style={{ width: "5vw", paddingTop: "4vh", paddingBottom: "4vh" }}
            />
          </Link>
        </div>
      </div>
    );
  }
}
