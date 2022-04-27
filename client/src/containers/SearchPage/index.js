import React from "react";
import ProductCard from "../../components/Card";
import { Panel } from "../../components/Panel";
import MultipleSelect from "../../components/Select";
export const SearchPage = () => {
  const onFilterButtonHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mx-20">
      <h2 className="font-bold text-2xl my-8">3,065 results for "..."</h2>
      <div>
        <div className="flex w-72">
          <button className="border py-8 w-1/3 text-center mr-4 rounded-md">
            Filter
          </button>
          <MultipleSelect
            data={[
              "Lowest price",
              "Highest price",
              "A -> Z",
              "Z -> A",
            ]}
            className="py-4 w-full"
          />
        </div>
        <div className="flex mt-4">
          <form className="w-1/4">
            <div>
              <div className="mt-4">
                <Panel panelTitle="Category" />
                <Panel panelTitle="Rating" />
              </div>
            </div>
          </form>
          <div className="flex self-end flex-col justify-around flex-wrap space-y-4 w-3/4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};
