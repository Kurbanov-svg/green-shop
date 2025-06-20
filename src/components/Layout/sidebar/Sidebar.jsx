import React from "react";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    // <div className="container">
    <div className={css.sidebar}>
      <div className={css.sidebarsetion}>
        <h2 className={css.sidebartitle}>Categories</h2>
      </div>
      <ul className={css.categorieslist}>
        <li className={css.categoryitem}>
          <span className={css.categoryname}>House Plants</span>
          <span className={css.categorycont}>(33)</span>
        </li>
        <li className={css.categoryitem}>
          <span className={css.categoryname}>Potter Plants</span>
          <span className={css.categorycont}>(12)</span>
        </li>
        <li className={css.categoryitem}>
          <span className={css.categoryname}>Seeds</span>
          <span className={css.categorycont}>(65)</span>
        </li>
        <li className={css.categoryitem}>
          <span className={css.categoryname}>Small Plants</span>
          <span className={css.categorycont}>(39)</span>
        </li>
        <li className={css.categoryitem}>
          <span className={css.categoryname}>Big Plants</span>
          <span className={css.categorycont}>(23)</span>
        </li>
        <li className={css.categoryitem}>
          <span className={css.categoryname}>Succulents</span>
          <span className={css.categorycont}>(17)</span>
        </li>
        <li className={css.categoryitem}>
          <span className={css.categoryname}>Trerrariums</span>
          <span className={css.categorycont}>(19)</span>
        </li>
        <li className={css.categoryitem}>
          <span className={css.categoryname}>Gardening</span>
          <span className={css.categorycont}>(13)</span>
        </li>
        <li className={css.categoryitem}>
          <span className={css.categoryname}>Accessories</span>
          <span className={css.categorycont}>(18)</span>
        </li>
      </ul>
      <div className={css.divider}></div>
      <div className={css.sidebarsection}>
        <h2 className={css.sidebartitle}>Price Range</h2>
        <div className={css.pricerange}>
          <p className={css.pricevalue}>Price: $39 – $1230</p>
          <button className={css.filterbutton}>Filter</button>
        </div>
      </div>
      <div className={css.sidebarsection}>
        <h2 className={css.sidebartitle}>Size</h2>
        <ul className={css.sizelist}>
          <li className={css.sizeitem}>Small (119)</li>
          <li className={css.sizeitem}>Medium (86)</li>
          <li className={css.sizeitem}>Large (78)</li>
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
