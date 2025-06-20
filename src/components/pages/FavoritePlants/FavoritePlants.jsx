import React, { useEffect } from "react";
import styles from "./FavoritePlants.module.css";
import { usePlants } from "../../context/ProductContext";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const FavoritePlants = () => {
  const { loadsavePlants, savePlants } = usePlants();

  useEffect(() => {
    loadsavePlants();
  }, []);

  return (
    <container>
      <div className={styles.title}>
        <h1>My Favorite Plants</h1>
      </div>
      <div className={styles.listBottom}>
        <div className={styles.cardWrapper}>
          {savePlants.map((item) => (
            <div className={styles.box} key={item.id}>
              <img src={item.imgPlants} alt={item.namePlants} />
              <div className={styles.icons}>
                <button>
                  <FaShoppingCart />
                </button>
                <button>
                  <FaSearch />
                </button>
              </div>
              <h3>{item.namePlants}</h3>
              <p className={styles.price}>${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </container>
  );
};

export default FavoritePlants;
