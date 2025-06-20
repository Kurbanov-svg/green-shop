import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";

const productContext = createContext();
export const usePlants = () => useContext(productContext);

const initialState = {
  plants: [],
  savePlants: JSON.parse(localStorage.getItem("x")) || [],
};

function reducer(state, action) {
  switch (action.type) {
    case "GET_PLANTS":
      return { ...state, plants: action.payload };
    case "ADD_SAVE_PLANTS":
      return { ...state, savePlants: [...state.savePlants, action.payload] };
    case "LOAD_SAVE":
      return { ...state, savePlants: action.payload };
    default:
      return state;
  }
}

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");
  const [totalPage, setTotalPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const API =
    "https://api-crud.elcho.dev/api/v1/a4204-01519-1816a/Plants?per_page=100";

  async function handleAddPlants(newPlants) {
    await axios.post(API, newPlants);
    handleReadPlants();
  }

  async function handleReadPlants() {
    try {
      let { data } = await axios.get(
        `${API}?per_page=3&&current_page=${currentPage}`
      );
      dispatch({
        type: "GET_PLANTS",
        payload: data.data,
      });
    } catch (error) {
      console.error("Ошибка при загрузке растений:", error);
    }
  }

  function savePlantes(plants) {
    const current = JSON.parse(localStorage.getItem("x")) || [];
    const updata = [...current, plants];
    localStorage.setItem("x", JSON.stringify(updata));
    dispatch({
      type: "ADD_SAVE_PLANTS",
      payload: plants,
    });
  }

  function loadsavePlants() {
    const data = JSON.parse(localStorage.getItem("x")) || [];
    dispatch({
      type: "LOAD_SAVE",
      payload: data,
    });
  }

  const values = {
    handleAddPlants,
    handleReadPlants,
    loadsavePlants,
    savePlantes,
    search,
    setSearch,
    savePlants: state.savePlants,
    data: state.plants,
    totalPage,
    setTotalPage,
    currentPage,
    setCurrentPage,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
