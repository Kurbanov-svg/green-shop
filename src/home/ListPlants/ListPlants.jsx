import React, { useEffect } from "react";
import styles from "./ListPlants.module.css";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { usePlants } from "../../components/context/ProductContext";
import { Link } from "react-router-dom";
import PaginationPage from "../../components/pages/pagination/PaginationPage";

const ListPlants = () => {
  const { handleReadPlants, data, search, savePlantes } = usePlants();

  useEffect(() => {
    handleReadPlants();
  }, []);

  const filterPlants = data.filter((el) =>
    el.namePlants.toLowerCase().includes(search || "".toLowerCase())
  );

  return (
    <div className="container">
      <section className={styles.container}>
        <div className={styles.mainContainer}>
          <div className={styles.list}>
            <div className={styles.listTop}>
              <nav className={styles.nav}>
                <p>All Plants</p>
                <p>New Arrivals</p>
                <p>Sale</p>
              </nav>
            </div>
            <div className={styles.listBottom}>
              <div className={styles.cardWrapper}>
                {filterPlants.map((item) => (
                  <div className={styles.box} key={item.id}>
                    <img src={item.imgPlants} alt={item.namePlants} />
                    <div className={styles.icons}>
                      <button>
                        <FaShoppingCart />
                      </button>
                      <Link to="/favorite">
                        <button onClick={() => savePlantes(item)}>
                          <FaHeart />
                        </button>
                      </Link>
                      <button>
                        <FaSearch />
                      </button>
                    </div>
                    <h3>{item.namePlants}</h3>
                    <p className={styles.price}>${item.price}</p>
                  </div>
                ))}
                <PaginationPage />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListPlants;
