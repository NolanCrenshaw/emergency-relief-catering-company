import React from "react";
import { motion } from "framer-motion";

const BoxMeals = () => {
  return (
    <div className="boxmeals-container body_component">
      <h1>Fresh Box Meals</h1>
      <h2>LARGE VOLUME CAPABILITIES NATIONWIDE</h2>
      <p>
        ERCC provides a ONE CALL solution to fresh box meals nationwide. Our
        national network puts us in a unique position to provide large volumes
        of meals on short notice, and allows us to service areas shut down by
        weather events, unrest, etc. Meals have a shelf life of 5 days
        refrigerated. Standard fresh box meals include sandwich, 2 snacks,
        condiments, and a napkin. Fresh box meals can be customized.
      </p>
      <section>
        <img
          alt="fresh meal"
          src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/ercc_page/firehouse_boxmeal.jpg"
        />
        <div>
          <h2>Fresh Meal Options</h2>
          <h4>Breakfast Box $9.00</h4>
          <p>Breakfast sandwich and 2 snacks</p>
          <h2>Fresh Meal Options</h2>
          <h4>Breakfast Box $9.00</h4>
          <p>
            Breakfast sandwich and 2 snacks​ Lunch and Dinner Box $9.00 6-inch
            submarine style sandwich and 2 snacks
          </p>
        </div>
      </section>
      <h2>1,300+ Locations Nationwide</h2>
      <img
        alt="store map"
        src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/ercc_page/nation_map.jpg"
      />
    </div>
  );
};

export default BoxMeals;
