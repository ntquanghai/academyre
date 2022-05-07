import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Rating } from "@mui/material";
import {Link} from "react-router-dom"
const HpPopup = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "12px",
    width: "320px",
    height: "200px",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid black",
    borderRadius: "0",
    backgroundColor: "rgb(236 254 255)"
  },
}));

export const HpItem = (props) => {
  const { img, courseName, desc, author, key, ratings } = props;
  return (
    <Link to="/courseDetail">
    <div
      className=" border bg-cyan-100 border-black m-auto p-4 shadow-sm cursor-pointer hover:opacity-75 relative"
      style={{ width: "320px", height: "300px" }}
      key={key}
    >
      <img
        className="mb-2 border border-black"
        style={{ width: "320px", height: "150px" }}
        src={img}
      ></img>
      <div className="font-semibold text-lg">{courseName}</div>
      <div className="text-xs text-gray-400 mb-2">{author}</div>
      <div className="flex flex-row">
        <div className = "text-sm mr-1 font-semibold text-yellow-500">
          {ratings}
        </div>
        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly size="small"/>
      </div>
      <HpPopup
        placement="right-start"
        title={
          <React.Fragment>
            <div className = "p-2">
              <div className="font-semibold text-lg w-full">{courseName}</div>
              <div className="text-green-600 w-full">
                Last updated: <b>24/02/2022</b>
              </div>
              <div className="w-full">{desc}</div>

              <div>
              
              </div>
              <div className="text-xs text-gray-400 mb-2"></div>
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
