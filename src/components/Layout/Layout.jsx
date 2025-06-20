import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainRoutes from "../../routes/MainRoutes";
import Plannet from "../pages/Plannet/Plannet";
import Sidebar from "./sidebar/Sidebar";
import ListPlants from "../../home/ListPlants/ListPlants";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <MainRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
