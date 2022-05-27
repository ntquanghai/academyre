import React from "react";
// import { ProductCardList } from "../../components/Card/CardList";
// import { Panel } from "../../components/Panel";
// import MultipleSelect from "../../components/Select";
import {useState, useEffect, Fragment} from "react";
import { HpCarousel } from "../../components/HomepageCarousel";
import { TabPanel } from "../../components/TabPanel";
import { Rating } from "@mui/material";
import { CategoryAccordion } from "../../components/CategoryAccordion";
import { CategoryItem } from "../../components/CategoryAccordion/categoryItem";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ProductCardList } from "../../components/Card/CardList";

export const SearchPage = () => {

  return (
    // <div className="mx-20">
    //   <h2 className="font-bold text-2xl my-8">3,065 results for "..."</h2>
    //   <div>
    //     <div className="flex w-72">
    //       <button className="border py-8 w-1/3 text-center mr-4 rounded-md">
    //         Filter
    //       </button>
    //       <MultipleSelect
    //         data={["Lowest price", "Highest price", "A -> Z", "Z -> A"]}
    //         className="py-4 w-full"
    //       />
    //     </div>
    //     <div className="flex my-4">
    //       <form className="w-1/4">
    //         <div>
    //           <div className="mt-4">
    //             <Panel panelTitle="Category" />
    //             <Panel panelTitle="Rating" />
    //           </div>
    //         </div>
    //       </form>
    //       <div className="flex self-end flex-col justify-around space-y-4">
    //        <ProductCardList />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-3/4 mx-auto">
      <div className="font-semibold text-3xl mt-8 mb-6">
        All courses about Programming Languages
      </div>
      <div className="flex flex-row">
        <div>
          <CategoryAccordion></CategoryAccordion>
        </div>

        <div className="px-8 ml-10 flex flex-col flex-grow">
          <div className="inline-block">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
              <Select
                label="Sort by"
                className="rounded-none text-black border-black outline-black bg-gray-50"
              >
                <MenuItem value={10}>Newest</MenuItem>
                <MenuItem value={20}>Highest rated</MenuItem>
                <MenuItem value={30}>Most popular</MenuItem>
              </Select>
            </FormControl>
          </div>
          <ProductCardList />
        </div>
      </div>
    </div>
  );
};
