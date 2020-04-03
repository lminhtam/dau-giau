import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home.page";
import Project from "./pages/Project/project.page";
import Campaign from "./pages/Campaign/campaign.page";

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
      </div>
    </Router>
  );
}

export default App;
