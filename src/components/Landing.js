import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="landing-container"
    >
      <img
        id="landing_background"
        alt="sky"
        src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/ercc_page/christopher-burns-wJkFjOB3KR0-unsplash+1.png"
      />
      <motion.img
        initial={{ opacity: 0, y: 100, x: -70 }}
        animate={{ opacity: 1, y: 0, x: -70 }}
        transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
        id="logo"
        alt="logo"
        src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/ercc_page/ERCC_logo.png"
      />
      <motion.img
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        id="mountains_back"
        alt="back mountains"
        src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/ercc_page/fore_mountains_large.png"
      />
      <img
        id="mountains_front"
        alt="front mountains"
        src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/ercc_page/fore_mountains_small.png"
      />
    </motion.div>
  );
};

export default Landing;
