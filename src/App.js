import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home.page";
import Project from "./pages/Project/project.page";
import Campaign from "./pages/Campaign/campaign.page";
import Menu from "./pages/Menu/menu.page";
import Contact from "./pages/Contact/contact.page";
import Game from "./pages/Game/game.page";
import ClipList1 from "./pages/ClipList/cliplist1.page";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/campaign">
          <Campaign />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/cliplist">
          <ClipList1 />
        </Route>
      </div>
    </Router>
  );
}

export default App;
