import React from "react";
import Plannet from "./Plannet/Plannet";
import Sidebar from "../Layout/sidebar/Sidebar";
import ListPlants from "../../home/ListPlants/ListPlants";
import PostsPlants from "../../home/PostsPlants/PostsPlants";
import Blog from "../../home/Blog/Blog";

const Home = () => {
  return (
    <div>
      <Plannet />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <ListPlants />
      </div>
      <PostsPlants />
      <Blog />
    </div>
  );
};

export default Home;
