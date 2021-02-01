import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Landing from "./Landing";
import Home from "./Home";
import About from "./About";

const Main = () => {
  return (
    <div className="main-container">
      <Landing />
      <nav>
        <div className="nav-container">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            >
              <label>Home</label>
            </motion.button>
          </Link>
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            >
              <label>About Us</label>
            </motion.button>
          </Link>
          <Link to="/shelf_stable_meals">
            <motion.button
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            >
              <label>Shelf Stable Meals</label>
            </motion.button>
          </Link>
          <Link to="/fresh_box_meals">
            <motion.button
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            >
              <label>Fresh Box Meals</label>
            </motion.button>
          </Link>
          <Link to="/ppe">
            <motion.button
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            >
              <label>PPE</label>
            </motion.button>
          </Link>
        </div>
      </nav>
      <div className="bulk_body">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <div className="contact-container" id="contact"></div>
      <footer></footer>
    </div>
  );
};

export default Main;
