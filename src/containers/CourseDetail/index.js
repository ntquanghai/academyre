import React from "react";
import { CourseSummary } from "../../components/CourseSummary";
import ReadOnlyRating from "../../components/Rating";

export const CourseDetail = () => {
  return (
    <React.Fragment>
      <div className="bg-gray-900 h-96 relative">
        <div>
          <h2 className="font-bold text-2xl text-white">
            Getting started with Web3 Development
          </h2>
          <p className="text-md text-white">
            Develop your first decentralized application from scratch on the
            Ethereum blockchain with Solidity
          </p>
          <ReadOnlyRating rating={3}/>
        </div>

        <CourseSummary className="absolute bg-white right-48 top-16" />
      </div>
      <div>content</div>
    </React.Fragment>
  );
};
