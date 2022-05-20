import React from "react";
import ButtonPrimary from "../Button";
export const CourseSummary = (props) => {
  const { children, className } = props;
  const classes = className + " w-1/5 h-fit drop-shadow-lg";
  return (
    <div className={classes}>
      <img
        src="https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
        className="object-cover"
      />
      <div className="px-8 pt-4 pb-8">
        <div className="font-bold text-3xl py-2">$84.99</div>
        <div className="flex justify-between mb-4">
          <ButtonPrimary
            fullWidth className="mr-1 font-semibold py-4 px-8 text-white bg-blue-400 rounded-none"
            variant="contained"
          >
            Add to cart
          </ButtonPrimary>
          <ButtonPrimary
            className="border-black py-4 rounded-none"
            variant="outlined"
          >
            <img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png" />
          </ButtonPrimary>
        </div>
        <ButtonPrimary
          className="border-black py-2 text-black font-semibold rounded-none"
          variant="outlined"
          fullWidth
        >
          Buy Now
        </ButtonPrimary>
        <div>
          <p className="font-semibold text-xl mt-4 text-black">This course includes:</p>
          <ul>
            <li>17 hours on-demand videos</li>
            <li>8 articles</li>
            <li>61 downloadable resources</li>
            <li>Full lifetime access Access on mobile and TV</li>
            <li>Certificate of completion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
