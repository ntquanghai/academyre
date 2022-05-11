import React from "react";
import "./index.css";
export const Dropdown = () => {
  return (
    <div className="dropdown w-40">
      <button className="dropbtn m-auto">Category</button>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};
