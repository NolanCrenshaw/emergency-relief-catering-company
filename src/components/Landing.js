import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="landing-container">
      <img
        id="landing_background"
        alt="sky"
        src="./imgs/christopher-burn.png"
      />
      <motion.img
        initial={{ opacity: 0, y: 200, x: -50 }}
        animate={{ opacity: 1, y: 0, x: -50 }}
        transition={{ ease: "easeInOut", duration: 3, delay: 2 }}
        id="logo"
        alt="logo"
        src="./imgs/ERCC_logo.png"
      />
      <motion.img
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
        id="mountains_back"
        alt="back mountains"
        src="./imgs/fore_mountains_large.png"
      />
      <img
        id="mountains_front"
        alt="front mountains"
        src="./imgs/fore_mountains_small.png"
      />
      <motion.img
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5, delay: 1 }}
        id="grass_left"
        alt="left grass"
        src="./imgs/fore_grass_left.png"
      />
      <motion.img
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5, delay: 1 }}
        id="grass_right"
        alt="right grass"
        src="./imgs/fore_grass_right.png"
      />
    </div>
  );
};

export default Landing;
