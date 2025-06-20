import React from "react";
import css from "./PostPlants.module.css";
import img1 from "../../assets/image 14 (1).svg";
import img2 from "../../assets/image 15 (1).svg";

const PostsPlants = () => {
  return (
    <div className={css.container}>
      <div className={css.main}>
        <img src={img1} alt="plant" className={css.image1} />
        <div className={css.bloks}>
          <h1>SUMMER CACTUS & SUCCULENTS</h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <button>Find More</button>
        </div>
        <img src={img2} alt="Second cactus" className={css.image2} />
        <div className={css.bloks}>
          <h1>SUMMER CACTUS & SUCCULENTS</h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <button>Find More</button>
        </div>
      </div>
    </div>
  );
};

export default PostsPlants;
