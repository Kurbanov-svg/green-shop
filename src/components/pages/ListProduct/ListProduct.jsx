import React, { useState } from "react";
import css from "./ListProduct.module.css";
import { usePlants } from "../../context/ProductContext";
const ListProduct = () => {
  const [imgPlants, setImgPlants] = useState("");
  const [namePlants, setNamePlants] = useState("");
  const [price, setPrice] = useState("");
  const { handleAddPlants } = usePlants();
  const handleSumbit = () => {
    if (!imgPlants || !namePlants || !price) {
      alert("Каяка! Шашасын 😡");
      return;
    }

    handleAddPlants({
      imgPlants,
      namePlants,
      price,
    });

    setImgPlants("");
    setNamePlants("");
    setPrice("");
  };

  return (
    <div className={css.container}>
      <div className={css.inputs}>
        <input
          value={imgPlants}
          onChange={(e) => setImgPlants(e.target.value)}
          type="text"
          placeholder="ImgUrl plants"
        />
        <input
          value={namePlants}
          onChange={(e) => setNamePlants(e.target.value)}
          type="text"
          placeholder="Name Plants"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="price Plants "
        />
      </div>
      <button onClick={() => handleSumbit()}> Add Plants</button>
    </div>
  );
};

export default ListProduct;
