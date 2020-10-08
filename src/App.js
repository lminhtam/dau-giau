import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "pages/Home/home.page";
import Project from "pages/Project/project.page";
import Campaign from "pages/Campaign/campaign.page";
import Menu from "pages/Menu/menu.page";
import Contact from "pages/Contact/contact.page";
import Game from "pages/Game/game.page";
import ClipList1 from "pages/ClipList/cliplist1.page";
import ListVideo from "pages/Video/listvideo.page";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/project" component={Project} />
      <Route path="/campaign" component={Campaign} />
      <Route path="/menu" component={Menu} />
      <Route path="/contact" component={Contact} />
      <Route path="/game" component={Game} />
      <Route path="/cliplist" component={ClipList1} />
      <Route path="/video" component={ListVideo} />
    </Router>
  );
}

export default App;
