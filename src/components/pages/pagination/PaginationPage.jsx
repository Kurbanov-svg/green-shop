import React, { useEffect } from "react";
import css from "./Pagination.module.css";
import { usePlants } from "../../context/ProductContext";
import { Pagination } from "@mui/material";
const PaginationPage = () => {
  const { totalPage, setCurrentPage, currentPage, handleReadPlants } =
    usePlants();

  useEffect(() => {
    handleReadPlants();
  }, [currentPage]);

  return (
    <div>
      <div className={css.count}>
        <Pagination
          onChange={(e, value) => setCurrentPage(value)}
          count={totalPage}
          page={currentPage}
          color="primary"
        />
      </div>
    </div>
  );
};

export default PaginationPage;
