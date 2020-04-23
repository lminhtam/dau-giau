import React from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import "./home.css";

function Home(props) {
  return (
    // <div className="background">
    //   <Link to="/campaign" className="link">
    //     <p className="btnTitle">CAMPAIGN</p>
    //   </Link>
    //   <img
    //     src={require("../../assets/icon/logoBig.png")})}
    //     alt="Logo"
    //     style={{ width: "12vw" }}
    //   ></img>
    //   <Link to="/project" className="link">
    //     <p className="btnTitle">PROJECT</p>
    //   </Link>
    // </div>
//     <div>
//       <img id="background" src={require("../../assets/images/bg.jpg")} alt="background" />
//       <img id="logo" src={require("../../assets/icon/logoBig.png")} alt="logo" />
//       <img
//         id="filter-logo"
//         src={require("../../assets/icon/Rectangle 1.png")}
//         alt="filter"
//       />
//       <div>
//         <img id="play" src={require("../../assets/icon/Group.png")} alt="game" />
//         <img id="rectangle" src={require("../../assets/icon/Rectangle 3.png")} alt="bg" />
//       </div>
//       <img id="mat1" src={require("../../assets/icon/mat.svg")} alt="mat" />
//       <img id="mat2" src={require("../../assets/icon/mat.svg")} alt="mat" />
//       <div>
//         <img
//           id="campaign"
//           src={require("../../assets/icon/campaign.png")}
//           alt="campaign"
//         />
//         <img
//           id="border-campaign"
//           src={require("../../assets/icon/Rectangle 51.png")}
//           alt="border-campaign"
//         />
//         <img
//           id="filter-campaign"
//           src={require("../../assets/icon/Rectangle 53.png")}
//           alt="filter"
//         />
//       </div>
//       <div>
//         <img id="project" src={require("../../assets/icon/project.png")} alt="project" />
//         <img
//           id="border-project"
//           src={require("../../assets/icon/Rectangle 52.png")}
//           alt="border-project"
//         />
//         <img
//           id="filter-project"
//           src={require("../../assets/icon/Rectangle 54.png")}
    <div className="wrap">
      <div className="background">
        <div className="wrapLeft">
          <span className="flipTitile">CAMPAIGN</span>
          <img
            className="mat1"
            src={require("../../assets/icon/mat.svg")}
            alt="mat"
          />
          <Link to="/campaign" className="linkLeft">
            CAMPAIGN
          </Link>
          <img
            className="filter-campaign"
            src={require("../../assets/icon/Rectangle 53.png")}
            alt="filter"
          />
        </div>
        <div style={{ height: "50vmin", width: '13vmax' }}>
          <img
            style={{ height: "100%", width: "100%" }}
            src={require("../../assets/icon/logoBig.png")}
            alt="logo"
          />
          {/* <img
          className="filter-logo"
          src={require("../../assets/icon/Rectangle 1.png")}
          alt="filter"
        /> */}
          <div className="gameWrap">
            <img
              className="play"
              src={require("../../assets/icon/Group.png")}
              alt="game"
            />
            <img
              className="rectangle"
              src={require("../../assets/icon/Rectangle 3.png")}
              alt="bg"
            />
          </div>
        </div>
        <div className="wrapRight">
          <Link to="/project" className="linkRight">
            PROJECT
          </Link>
          <img
            className="filter-project"
            src={require("../../assets/icon/Rectangle 54.png")}
            alt="filter"
          />
          <img
            className="mat2"
            src={require("../../assets/icon/mat.svg")}
            alt="mat"
          />
          <span className="flipTitile">PROJECT</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
