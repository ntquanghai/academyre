import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./index.css";
export const Dropdown = () => {
  return (
    <div className="dropdown h-20 flex">
      <button className="dropbtn h-full my-auto">
        Category
        <ArrowDropDownIcon></ArrowDropDownIcon>
        </button>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};
