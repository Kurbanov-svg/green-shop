import React from "react";
import css from "./Blog.module.css";
import svg1 from "../../assets/01.svg";
import svg2 from "../../assets/02.svg";
import svg3 from "../../assets/03.svg";
import svg4 from "../../assets/04.svg";

const Blog = () => {
  return (
    <div className="container">
      <div className={css.title}>
        <h2>Our Blog Posts</h2>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className={css.main}>
        <div className={css.into}>
          <img src={svg1} alt="" />
          <div className={css.box}>
            <p>September 12 I Read in 6 minutes</p>
            <h2>
              Cactus & Succulent <br />
              Care Tips
            </h2>
            <span>
              Cacti are succulents are easy care <br />
              plants for any home or patio.
            </span>

            <h5>Read More</h5>
          </div>
        </div>
        <div className={css.into}>
          <img src={svg2} alt="" />
          <div className={css.box}>
            <p>SSeptember 13 I Read in 2 minutes</p>
            <h2>
              Top 10 Succulents for <br />
              Your Home
            </h2>
            <span>
              Best in hanging baskets. Prefers <br />
              medium to high light.
            </span>

            <h5>Read More</h5>
          </div>
        </div>
        <div className={css.into}>
          <img src={svg3} alt="" />
          <div className={css.box}>
            <p>September 15 I Read in 3 minutes</p>
            <h2>
              Cactus & Succulent <br />
              Care Tips
            </h2>
            <span>
              Cacti are succulents are easy care <br />
              plants for any home or patio.
            </span>
            <h5>Read More</h5>
          </div>
        </div>
        <div className={css.into}>
          <img src={svg4} alt="" />
          <div className={css.box}>
            <p>September 12 I Read in 2 minutes</p>
            <h2>
              Best Houseplants <br />
              Room by Room
            </h2>

            <span>
              The benefits of houseplants are <br />
              endless. In addition to..
            </span>
            <h5>Read More </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
