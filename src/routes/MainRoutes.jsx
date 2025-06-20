import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Shop from "../components/pages/shops/Shop";
import PlantCare from "../components/pages/PlantCare/PlantCare";
import Register from "../authentication/Register/Register";
import ListPlants from "../home/ListPlants/ListPlants";
import ListProduct from "../components/pages/ListProduct/ListProduct";
import FavoritePlants from "../components/pages/FavoritePlants/FavoritePlants";

const MainRoutes = () => {
  const routes = [
    {
      link: "/",
      element: <Home />,
    },
    {
      link: "/shop",
      element: <Shop />,
    },
    {
      link: "/place",
      element: <PlantCare />,
    },
    {
      link: "/reg",
      element: <Register />,
    },
    {
      link: "/list",
      element: <ListProduct />,
    },
    {
      link: "/favorite",
      element: <FavoritePlants />,
    },
  ];

  return (
    <div>
      <Routes>
        {routes.map((el, idx) => (
          <Route path={el.link} element={el.element} key={idx} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
