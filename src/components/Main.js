import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Landing from "./Landing";
import Home from "./Home";
import About from "./About";
import ShelfMeals from "./ShelfMeals";
import BoxMeals from "./BoxMeals";

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
          {/* <Link to="/ppe">
            <motion.button
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            >
              <label>PPE</label>
            </motion.button>
          </Link> */}
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
          <Route path="/shelf_stable_meals">
            <ShelfMeals />
          </Route>
          <Route path="/fresh_box_meals">
            <BoxMeals />
          </Route>
        </Switch>
      </div>
      <div className="contact-container" id="contact">
        <h1>Contact Us</h1>
        <p>For questions and ordering, please call 24/7!</p>
        <div>
          <h3>Edwin Merrigan</h3>
          <div>
            <p>1-888-588-1402</p>
            <p>Edwin@BOXDmeals.com</p>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default Main;
