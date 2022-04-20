import React, { Fragment } from "react";
import ProductCard from "../../components/Card";
import { SearchField } from "../../components/Search";
export const SearchPage = () => {
  return (
    <Fragment>
      <h2>3,065 results for "..."</h2>
      <div className="flex">
        <div>
          <button className="border">
              Filter
          </button>
          <button className="border">
              Sort
          </button>
        </div>
        <div className="flex self-end flex-col justify-around flex-wrap space-y-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Fragment>
  );
};
