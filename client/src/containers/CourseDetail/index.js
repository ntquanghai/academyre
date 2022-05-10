import React from "react";
import CustomSeparator from "../../components/Breadcrumbs";
import { CourseSummary } from "../../components/CourseSummary";
import ReadOnlyRating from "../../components/Rating";
import "./index.css";
export const CourseDetail = () => {
  return (
    <div className="h-full">
      <div className="bg-[#1C1D1F]">
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
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/approve-and-update.png"
                alt="update"
              />
              <p>Last update 3/2020</p>
            </div>
            <div className="flex space-x-4">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/globe--v2.png"
                alt="language"
              />
              <p>English</p>
            </div>
            <div className="flex space-x-4">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/creative-commons.png"
                alt="subtitle"
              />
              <p>English [auto], Dutch [auto]</p>
            </div>
          </div>
        </div>
      </div>
      <CourseSummary className="fixed bg-white right-48 top-36" />
      <div>
        <div className="rounded-lg w-1/2 border mx-auto ml-24 px-4 my-12">
          <h1 className="font-semibold text-2xl my-4">What you'll learn</h1>
          <div className="mx-0 my-8">
            <ul className="flex justify-between flex-wrap flex-row">
              <li className="w-1/2">
                <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                  <img
                    src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                    alt="tick"
                  />
                  <div>
                    Understand the basic philosophy behind the blockchain and
                    distributed/decentralized applications
                  </div>
                </div>
              </li>
              <li className="w-1/2">
                <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                  <img
                    src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                    alt="tick"
                  />
                  <div>
                    Develop a web3 app, create a project, deploy it in
                    production, write smart contracts, unit test them, and
                    create a user interface for them
                  </div>
                </div>
              </li>
              <li className="w-1/2">
                <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                  <img
                    src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                    alt="tick"
                  />
                  <div>
                    The fundamentals of the Solidity smart contract language
                  </div>
                </div>
              </li>
              <li className="w-1/2">
                <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                  <img
                    src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                    alt="tick"
                  />
                  <div>
                    How to deploy a decentralized app to various Ethereum
                    instances (testrpc, private chain, test chain, main net)
                  </div>
                </div>
              </li>
              <li className="w-1/2">
                <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                  <img
                    src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                    alt="tick"
                  />
                  <div>
                    The basics of how a blockchain generally works, just enough
                    to be able to use it as a development platform
                  </div>
                </div>
              </li>
              <li className="w-1/2">
                <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                  <img
                    src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                    alt="tick"
                  />
                  <div>
                    How to combine the right tools to put together a consistent
                    and real world pragmatic development environment
                  </div>
                </div>
              </li>
              <li className="w-1/2">
                <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                  <img
                    src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                    alt="tick"
                  />
                  <div>
                    How to use the Truffle build and testing framework (covers
                    Truffle 4)
                  </div>
                </div>
              </li>
              <li className="w-1/2">
                <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                  <img
                    src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                    alt="tick"
                  />
                  <div>How to unit test smart contracts</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
