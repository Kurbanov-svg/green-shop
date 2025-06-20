import React, { useState } from "react";
import css from "./Header.module.css";
import logo from "../../../assets/Logo (3).svg";
import { Link } from "react-router-dom";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaTimes, FaBars, FaPlus } from "react-icons/fa";
import Profile from "../../../authentication/Profile/Profile";
import { usePlants } from "../../context/ProductContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { search, setSearch } = usePlants();

  return (
    <div className="container">
      <div className={css.container}>
        <div className={css.header}>
          <div className={css.logo}>
            <img src={logo} alt="Greenshop Logo" />
          </div>
          <button className={css.burger} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={`${css.nav} ${menuOpen ? css.active : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/place">Plant Care</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/list">
              <FaPlus />
            </Link>
          </nav>

          <div iv className={css.actions}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={css.searchinput}
              placeholder="Search..."
            />

            <button className={css.icon}>
              <CiShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
