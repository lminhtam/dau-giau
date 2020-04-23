import React from "react";
import "../../App.css";
import "../Menu/menu.css";

function Menu(props) {
  return (
    <div>
      <div class="header">
        <div class="logo">
          <img 
            class="logoDG"
            src={require("../../assets/icon/logo.png")}
            alt="logo">
          </img>
          <img 
            class="filter-logo" 
            src={require("../../assets/icon/Rectangle 1.png")}
            alt="filter-logo">
          </img>
        </div>
            <div class="close">
          <img 
            src={require("../../assets/icon/close.png")}
            alt="close">
          </img>
        </div>
      </div>
      <div class="menu">
        <div class="campaign">
          <h1 class="text">CAMPAIGN</h1>
          <img 
            class="filter-campaign" 
            src={require("../../assets/icon/menu-filter-campaign.png")} 
            alt="filter-campaign"
          />
        </div>
        <div class="project">
          <h1 class="text">PROJECT</h1>
          <img 
            class="filter-project" 
            src={require("../../assets/icon/menu-filter-project.png")}
            alt="filter-project"
          />
        </div>
        <div class="contact-us">
          <h1 class="text">CONTACT US</h1>
          <img 
            class="filter-contact-us" 
            src={require("../../assets/icon/menu-filter-contact-us.png")}
            alt="filter-contact-us"
          />
        </div>
      </div>
      <div class="element1">
        <img 
          class="pines" 
          src={require("../../assets/icon/element-pines.png")}
          alt="pine"
        />
        <img 
          class="pine-circle" 
          src={require("../../assets/icon/element-pines-circle.png")}
          alt="pine-circle"
        />
      </div>
      <div class="element2">
        <img 
          class="pines" 
          src={require("../../assets/icon/element-pines.png")}
          alt="pine"
        />
        <img 
          class="pine-circle" 
          src={require("../../assets/icon/element-pines-circle.png")}
          alt="pine-circle"
        />
      </div>
    </div>
  );
}

export default Menu;
