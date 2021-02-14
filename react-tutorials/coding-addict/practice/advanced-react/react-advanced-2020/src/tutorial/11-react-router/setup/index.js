import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages (components)
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <h2>11) react router</h2>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        {/* 1 - set up URL parameters, the beginning of URL is up to us */}
        {/* 2 - after the URL, type semicolon : and then a name, in this case "id" but it can be anything */}
        {/* 3 - prop "children", here we pass in what component we want to display*/}
        <Route path="/people/:id" children={<Person />}></Route>

        <Route path="/people">
          <People />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
