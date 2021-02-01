import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      className="about-container body_component"
    >
      <h4>
        ERCC has been providing hearty and flavorful meals on a large scale
        since 2012.
      </h4>
      <section>
        <img
          alt="map"
          src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/ercc_page/FemaMap_edited.jpg"
        />
        <div>
          <h2>Volume Capabilities by FEMA Region</h2>
          <p>
            ERCC's daily meal capabilities vary per FEMA Region. This map
            indicates ERCC's daily meal capabilities by region.
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2>Lead Times</h2>
          <p>
            ERCC's lead times vary for fresh and shelf stabnle meals. Fresh Box
            Meals have a lead time of 6-48 hours depending on volume and
            delivery distance.
          </p>
          <p>
            Shelf Stable Meal Kits & Pantry Kits have a lead time of 2-4 days
            depending on volume and delivery distance.
          </p>
        </div>
        <img
          alt="van"
          src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/ercc_page/white_van.jpg"
        />
      </section>
      <section>
        <h2>Past Performance</h2>
        <ul>
          <li>
            <p>
              COVID-19: Delivered 200,000 shelf stable meals to date to doctors,
              nurses, first responders, and quarantined seniors.
            </p>
          </li>
          <li>
            <p>
              Western Wildfires 2020: Delivered 125,000+ shelf stable meals and
              20,000+ fresh box meals
            </p>
          </li>
          <li>
            <p>
              Iowa Derecho 2020: Delivered 100,000 shelf stable meals to
              affected populations
            </p>
          </li>
          <li>
            <p>
              Hurricane Laura 2020: Delivered 30,000 fresh meals to base camps
              and Red Cross
            </p>
          </li>
          <li>
            <p>
              Hurricane Michael 2018: Delivered over 205,000 box meals to base
              camps and National Guard Troops
            </p>
          </li>
          <li>
            <p>
              Hurricane Florence: Delivered over 220,000 box meals to base camps
              and national Guard Troops
            </p>
          </li>
          <li>
            <p>
              Western Wildfires 2015-present: Delivered over 105,000 sack
              lunches per season to the Forestry Department
            </p>
          </li>
          <li>
            <p>
              West Virginia Derecho 2012: Delivered over 72,000 box meals to
              base camps and National Guard Troops
            </p>
          </li>
          <li>
            <p>
              Hurricane Sandy 2012: Delivered 140,000 box meals to base camps
              and National Guard Troops
            </p>
          </li>
        </ul>
      </section>
    </motion.div>
  );
};

export default About;
