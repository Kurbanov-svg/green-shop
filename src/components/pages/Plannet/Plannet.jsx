import React from "react";
import css from "./Planet.module.css";
import small from "../../../assets/01 1.svg";
import big from "../../../assets/01 2.svg";

const Plannet = () => {
  return (
    <div className="container">
      <section className={css.hero}>
        <div className={css.heroText}>
          <p className={css.welcome}>Welcome to Greenshop</p>
          <h2>
            LET'S MAKE A <br /> BETTER
            <span>PLANET</span>
          </h2>
          <p className={css.description}>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <button className={css.shopBtn}>SHOP NOW</button>
        </div>
        <div className={css.heroimage}>
          <img src={big} alt="" />
          <img src={small} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Plannet;
