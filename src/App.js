import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

import Main from "./components/Main";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <div className="nav-container">
            <section>
              <span>ERCC</span>
            </section>
            <section></section>
            <section>
              <HashLink smooth to="#contact">
                <button>
                  <label>Contact</label>
                </button>
              </HashLink>
            </section>
          </div>
        </nav>
        <section id="vis">
          <Main />
        </section>
      </div>
    </Router>
  );
};

export default App;
