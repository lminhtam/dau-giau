import React from "react";
import "../../App.css";
import FixedButton from "../../shared/fixedButton/fixedBtn";
import "./contact.css";

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

function Contact(props) {
  return (
    <div className="pageBg">
      <FixedButton />
      <div id="pageContainer">
        <div id="aboutContainer">
          <div id="aboutText">
            <div id="bigTitleContainer">
              <span className="bigTitle">GIỚI THIỆU</span>
              <div id="dashedDiv" />
            </div>
            <p id="content">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incclassunt ut
              labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
              minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </div>
          <div id="aboutLogo">
            <img
              id="logo-MAT"
              src={require("../../assets/icon/logo-MAT.png")}
              alt="logo-MAT"
            />
            <span id="MAT-production">M.A.T PRODUCTION</span>
            <span id="making">MAKING ATRACTIVE THINGS</span>
          </div>
        </div>

        <div id="bigTitleContainer">
          <span className="bigTitle">LIÊN HỆ</span>
          <div id="dashedDiv" />
        </div>
        <div id="contactContainer">
          <div id="aboutLogo">
            <span id="contactTitle">BAN TRUYEN THONG M.A.T PRODUCTION</span>
            <span id="contactTitle">bantruyenthong.hcmus@gmail.com</span>
            <span id="contactTitle">+1 248 817-8561</span>
          </div>
          <div id="followContainer">
            <p id="contactTitle">THEO DÕI CHÚNG TÔI TẠI</p>
            <div id="iconContainer">
              {socialContact.map((item) => (
                <a
                  style={{ paddingRight: "1.5vw" }}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
