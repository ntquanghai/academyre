import React from "react";
import { ProductCardList } from "../../components/Card/CardList";
import { Panel } from "../../components/Panel";
import MultipleSelect from "../../components/Select";
export const SearchPage = () => {
  return (
    <div className="mx-20">
      <h2 className="font-bold text-2xl my-8">3,065 results for "..."</h2>
      <div>
        <div className="flex w-72">
          <button className="border py-8 w-1/3 text-center mr-4 rounded-md">
            Filter
          </button>
          <MultipleSelect
            data={["Lowest price", "Highest price", "A -> Z", "Z -> A"]}
            className="py-4 w-full"
          />
        </div>
        <div className="flex my-4">
          <form className="w-1/4">
            <div>
              <div className="mt-4">
                <Panel panelTitle="Category" />
                <Panel panelTitle="Rating" />
              </div>
            </div>
          </form>
          <div className="flex self-end flex-col justify-around space-y-4">
           <ProductCardList />
          </div>
        </div>
      </div>
    </div>
  );
};
