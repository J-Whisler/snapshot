import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";

import AboutUs from "./components/pages/AboutUs";
import OurWork from "./components/pages/OurWork";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={AboutUs} exact></Route>
          <Route path="/our-work" component={OurWork}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
