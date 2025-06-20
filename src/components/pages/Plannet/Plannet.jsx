import React from "react";
import css from "./Planet.module.css";
import small from "../../../assets/01 1.svg";
import big from "../../../assets/01 2.svg";

const Plannet = () => {
  return (
    <div className="container">
      <section className={css.hero}>
        <div className={css.heroContent}>
          <h5 className={css.welcome}>Welcome to GreenShop</h5>
          <h1>
            Let's Make a <span className={css.grow}>Better Planet</span>
          </h1>
          <p className={css.description}>
            Your go-to shop for trendy, affordable plants. Join the urban jungle
            revolution with us.
          </p>
          <button className={css.shopBtn}>Shop Now</button>
        </div>
        <div className={css.heroImage}>
          <img src={big} alt="Plant" />
          <img src={small} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Plannet;
