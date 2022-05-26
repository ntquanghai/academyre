import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Rating } from "@mui/material";
import {Link} from "react-router-dom"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const HpPopup = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "12px",
    width: "320px",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid black",
    borderRadius: "0",
    backgroundColor: "white"
  },
}));

export const returnCost = (costObj) => {
  const today = new Date()
  if(!costObj.sale.available) {
      return(
        <div className = "font-bold">{costObj.current}</div>
      )
  } 
  else {
    if((604800000 - (costObj.sale.duration - today))>0) {
      let dayRemaining = Math.ceil((costObj.sale.duration - today)/(1000*60*60*24))
      if(dayRemaining==1){
        return(
          <div className = "font-bold flex flex-row">
            <strike>{costObj.current}</strike> 
            <div className = "ml-1">{costObj.sale.cost}</div>
            <div className = "ml-1 font-semibold text-red-600">(Sale ending in {dayRemaining} day)</div>
          </div>
        )
      }
      else if(dayRemaining<=0) {
        return(
          <div className = "font-bold">{costObj.current}</div>
        )
      }
      else if(dayRemaining<8) {
        return(
          <div className = "font-bold flex flex-row">
            <strike>{costObj.current}</strike> 
            <div className = "ml-1">{costObj.sale.cost}</div>
            <div className = "ml-1 font-semibold text-red-600">(Sale ending in {dayRemaining} days)</div>
          </div>
        )
      }
      else {
        return(
          <div className = "font-bold"><strike>{costObj.current}</strike> {costObj.sale.cost}</div>
        )
      }
      
    }
    else {
      return(
        <div className = "font-bold"><strike>{costObj.current}</strike> {costObj.sale.cost}</div>
      )
    }
  }
}

export const HpItem = (props) => { 
  // TODO: #2 update the detail @ntquanghai
  const { img, courseName, desc, author, key, ratings, raters, category, cost } = props;
  return (
    <Link to="/courseDetail">
    <div
      className=" bg-white m-auto p-4 shadow-sm cursor-pointer hover:opacity-75 relative "
      style={{ width: "320px", height: "300px" }}
      key={key}
    >
      <img
        className="mb-2"
        style={{ width: "100%", height: "150px" }}
        src={img}
      ></img>
      <div className="font-semibold text-lg truncate">{courseName}</div>
      <div className="text-xs text-gray-700 mb-1">{category}</div>
      <div className="flex flex-row">
        <div className = "text-sm mr-1 font-semibold text-yellow-600">
          {ratings.score} 
        </div>
        <Rating sx = {{color:"rgb(245 158 11)"}} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly size="small"/>
        <div className = "text-sm mr-1 text-gray-500"><p/>({ratings.raters})</div>
      </div>
      <div className = "text-sm">{returnCost(cost)}</div>
      <HpPopup
        placement="right-start"
        title={
          <React.Fragment>
            <div className = "p-2">
              <div className="font-semibold text-base w-full">{courseName}</div>
              <div className="text-xs text-gray-500 w-full">{author}</div>
              <div className="text-green-600 w-full">
                Last updated: <b>24/02/2022</b>
              </div>
              <div className="w-full">{desc}</div>
              <div className = "flex flex-row w-full mt-4">
                <button className="w-4/5 py-2 bg-amber-200 border text-sm hover:opacity-75 cursor-pointer border-black">Add to cart</button>
                <div className = "border border-black p-2 m-auto hover:opacity-75 cursor-pointer">
                  <FavoriteBorderIcon
                    fontSize="inherit"
                    style={{ fontSize: "24px", margin: "auto"}}
                  />
                </div>
              </div> 
            </div>
          </React.Fragment>
        }
      >
        <Button className="w-full h-full absolute top-0 left-0"></Button>
      </HpPopup>
    </div>
    </Link>
  );
};
