import { Pagination, Stack } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "..";
import usePagination from "../../../hooks/usePagination";

export const ProductCardList = (props) => {
  const products = [
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    2,
    3,
    55,
    67,
    7,
    8,
    2,
    1,
    3,
    4,
  ];
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(products.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);
  const changeHandler = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  useEffect(() => {
    console.log("use effect");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);
  return (
    <Fragment>
      {_DATA
        ? _DATA
            .currentData()
            .map((product, index) => <ProductCard key={index} />)
        : "Can't not find this keyword"}
      <Stack spacing={2}>
        <Pagination
          count={count}
          size="large"
          page={page}
          onChange={changeHandler}
          color="primary"
          className="mx-auto"
        />
      </Stack>
    </Fragment>
  );
};
