import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      className="home-container body_component"
    >
      <p>
        ERCC provides a ONE CALL solution to box meals and shelf stable meal
        kits nationwide. We handle the order communication, logistics, tracking
        and billing. Our national network of over 1,500 trusted small businesses
        produce and deliver the meals. Using this network we are able to respond
        with large volumes of meals on short notice. ERCC has a 24/7 call center
        that handles all incoming orders. Our meals can often be customized to
        meet your needs.
      </p>
    </motion.div>
  );
};

export default Home;
