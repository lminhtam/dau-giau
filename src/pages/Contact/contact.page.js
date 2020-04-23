import React from "react";
import "../../App.css";
import "../Contact/contact.css";

function Contact(props) {
    return(
        <div>
            <div class="header">
                <div class="logo">
                    <img 
                        class="logoDG" 
                        src={require("../../assets/icon/logo.png")}
                        alt="logo"
                    />
                    <img 
                        class="filter-logo" 
                        src={require("../../assets/icon/Rectangle 1.png" )}
                        alt="filter-logo"
                    />
                </div>
                <div class="menu">
                    <img 
                        src={require("../../assets/icon/menu.png" )}
                        alt="menu"
                    />
                </div>
            </div>
            <div class="about">
                <h1 class="about-us">ABOUT US</h1>
                <p class="content">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                    sed quia non numquam eius modi tempora incclassunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                    autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
                    eum fugiat quo voluptas nulla pariatur?
                </p>
            </div>
            <div class="slogan">
                <img 
                    class="logo-MAT" 
                    src={require("../../assets/icon/logo-MAT.png")}
                    alt="logo-MAT"
                />
                <h1 class="MAT-production">M.A.T PRODUCTION</h1>
                <p class="making">MAKING ATRACTIVE THINGS</p>
            </div>
            <div class="contact">
                <h1 class="contact-us">CONTACT US</h1>
                <p class="name">BAN TRUYEN THONG M.A.T PRODUCTION</p>>
                <p class="email">bantruyenthong.hcmus@gmail.com</p>
                <p class="phone">+1 248 817-8561</p>
            </div>
            <div class="follow">
                <p class="follow-us">FOLLOW US</p>
                <div class="icon">
                    <a class="icon-facebook"
                        href="https://www.fb.com/MuaHeXanh.KhoaHocTuNhien" 
                        target="_black">
                            <img 
                            src={require("../../assets/icon/icon-facebook.png")}
                                alt="icon-facebook"
                            />
                    </a>
                    <a class="icon-youtube" 
                        href="https://www.youtube.com" 
                        target="_black">
                            <img
                            src={require("../../assets/icon/icon-youtube.png")}
                                alt="icon-youtube"
                            />
                    </a>
                    <a class="icon-behance" 
                        href="https://www.behance.net/" 
                        target="_black">
                            <img 
                            src={require("../../assets/icon/icon-behance.png")}
                                alt="icon-behance"
                            />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;