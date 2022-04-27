import React from "react";
import CustomSeparator from "../../components/Breadcrumbs";
import { CourseSummary } from "../../components/CourseSummary";
import ReadOnlyRating from "../../components/Rating";
import "./index.css";
export const CourseDetail = () => {
  return (
    <React.Fragment>
      <div className="bg-[#1C1D1F] h-96 relative ">
        <div className="px-20 py-8 space-y-4 w-1/2">
          <CustomSeparator />
          <h2 className="font-bold text-2xl text-white">
            Getting started with Web3 Development
          </h2>
          <p className="text-xl">
            Develop your first decentralized application from scratch on the
            Ethereum blockchain with Solidity
          </p>
          <ReadOnlyRating rating={3} />
          <p>
            Created by <u className="text-blue-400">Sebastien Arbogast</u>,{" "}
            <u className="text-blue-400">Said Eloudrhiri</u>
          </p>
          <div className="flex space-x-4">
            <div className="flex space-x-4">
              <img src="https://img.icons8.com/material-outlined/24/ffffff/approve-and-update.png" />
              <p>Last update 3/2020</p>
            </div>
            <div className="flex space-x-4">
              <img src="https://img.icons8.com/material-outlined/24/ffffff/globe--v2.png" />
              <p>English</p>
            </div>
            <div className="flex space-x-4">
              <img src="https://img.icons8.com/material-outlined/24/ffffff/creative-commons.png" />
              <p>English [auto], Dutch [auto]</p>
            </div>
          </div>
        </div>

        <CourseSummary className="absolute bg-white right-48 top-16" />
      </div>
      <div>content</div>
    </React.Fragment>
  );
};
