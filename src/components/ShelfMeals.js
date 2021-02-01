import React from "react";
import { motion } from "framer-motion";

const ShelfMeals = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      className="shelfmeals-container body_component"
    >
      <h1>Shelf Stable Meals</h1>
      <h2>CUSTOMIZE YOUR OWN MEAL KIT</h2>
      <p>
        ERCC's shelf stable meal kits are fully customizable and can have a
        shelf life of 12+ months. Standard meal kits include an entree that
        requires minimal or no cooking and snacks. We can create kits of any
        size and adjust the menu as needed. Pantry kits generally include items
        that may require basic cooking and bulk items.
      </p>
      <p>
        ERCC has large volume capabilities on short notice. Lead times depend on
        delivery distance. Call to discuss your needs! Our Services
      </p>
      <h1>Shelf Stable Meal Kit Sample Options</h1>
      <section>
        <div>
          <h2>Meal Kits with Entree & 1 Snack</h2>
          <ul>
            <li>
              <h3>1 Meal Kit $6.00</h3>
              <p>Shelf stable entrées with 1 snack</p>
            </li>
            <li>
              <h3>3 Meal Kit $17</h3>
              <p>3 Shelf stable entrées with 3 snacks</p>
            </li>
            <li>
              <h3>5 Meal Kit $27</h3>
              <p>5 Shelf stable entrées with 5 snacks</p>
            </li>
            <li>
              <h3>7 Meal Kit $37</h3>
              <p>7 Shelf stable entrées with 7 snacks</p>
            </li>
            <li>
              <h3>10 Meal Kit $50</h3>
              <p>10 Shelf stable entrées with 10 snacks</p>
            </li>
          </ul>
        </div>
        <div>
          <h2>Meal Kits with Entrée & 3 Snacks</h2>
          <ul>
            <li>
              <h3>1 Meal Kit $9.00</h3>
              <p>Shelf stable entrées with 1 snack</p>
            </li>
            <li>
              <h3>3 Meal Kit $25</h3>
              <p>3 Shelf stable entrées with 9 snacks</p>
            </li>
            <li>
              <h3>5 Meal Kit $40</h3>
              <p>5 Shelf stable entrées with 15 snacks</p>
            </li>
            <li>
              <h3>7 Meal Kit $54</h3>
              <p>7 Shelf stable entrées with 21 snacks</p>
            </li>
            <li>
              <h3>10 Meal Kit $75</h3>
              <p>10 Shelf stable entrées with 30 snacks</p>
            </li>
          </ul>
        </div>
      </section>
    </motion.div>
  );
};

export default ShelfMeals;
