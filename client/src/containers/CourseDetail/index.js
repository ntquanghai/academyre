import React from "react";
import CustomSeparator from "../../components/Breadcrumbs";
import { CourseSummary } from "../../components/CourseSummary";
import ReadOnlyRating from "../../components/Rating";
import { Rating } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CustomizedAccordions from "../../components/Accordion";
import "./index.css";
import { FormControl, Select, MenuItem } from "@mui/material";
import { StudentFeedback } from "../../components/StudentFeedback";
export const CourseDetail = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="h-full pb-8" style = {{minHeight:"100vh"}}>
      <div className="bg-[#1C1D1F]">
        <div className="pl-60 py-8 space-y-4 w-1/2">
          <CustomSeparator 
            text = "Information Technology"
          />
          <div className="font-bold text-5xl text-white">
            Getting started with Web3 Development
          </div>
          <div className="text-xl font-light text-white"> 
            Develop your first decentralized application from scratch on the
            Ethereum blockchain with Solidity
            <div className = "flex flex-row">
              <div className = "text-base mr-1 font-semibold text-yellow-600">
                4.5
              </div>
              <Rating className = "my-auto" sx = {{color:"rgb(245 158 11)"}} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly size = "small"/>
              <div className = "text-base mr-1 text-gray-500"><p/>{"(392)"}</div>
            </div>


            Created by <u className="text-blue-400">Sebastien Arbogast</u>,{" "}
            <u className="text-blue-400">Said Eloudrhiri</u>
          </div>
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
      <div className = "pl-40 flex flex-row" style={{maxWidth:"1200px"}}>
      <div className = "px-20 py-8" >
        <div className = "py-4 mt-4 h-full mx-auto">
              <div className = "text-3xl font-bold">Course information</div>
              <div>
                <div className = "text-2xl font-semibold mt-4">
                  Course overview
                </div>
                <div className = "mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nulla velit, eget consequat quam pharetra eget. Ut massa ex, aliquet vitae nisl vel, ullamcorper egestas elit. Suspendisse tristique interdum quam eu gravida. Duis facilisis in justo ut lobortis. Praesent mattis egestas elit, vel porta tellus tincidunt ac. Morbi enim turpis, tincidunt sit amet orci a, ornare viverra arcu. Vestibulum rhoncus lacus non arcu aliquet, non tempus neque molestie. Curabitur sagittis sapien quis dolor elementum eleifend. Nullam lacinia felis sapien, id porttitor libero laoreet consequat. Donec quis ipsum vel lorem gravida vehicula vitae quis diam. Vivamus vitae volutpat ante, sit amet accumsan tellus. Mauris placerat diam nulla, a varius diam ullamcorper sit amet.
                </div>
                <div className = "mt-8 text-2xl font-semibold">
                  Course objectives
                </div>
                <div className= "mt-2">
                  <ul className = "list-disc columns-2	">
                    <div className = "ml-5">
                      <li>Duis blandit vestibulum orci</li>
                      <li>Duis blandit vestibulum orci</li>
                      <li>Duis blandit vestibulum orci</li>
                      <li>Duis blandit vestibulum orci</li>
                      <li>Duis blandit vestibulum orci</li>
                      <li>Duis blandit vestibulum orci</li>
                    </div>
                  </ul>  
                </div>
                <div className=" my-8">
                <div className="font-semibold text-2xl mt-4">What you'll learn</div>
                <div className="mx-0 mt-2 mb-4">
                  <ul className="flex justify-between flex-wrap flex-row">
                    <li className="w-1/2 my-1">
                      <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                        <CheckIcon fontSize="16px" className ="mr-2"></CheckIcon>
                        <div className = "text-base" style ={{lineHeight:"16px"}}>
                          Understand the basic philosophy behind the blockchain and
                          distributed/decentralized applications
                        </div>
                      </div>
                    </li>
                    <li className="w-1/2 my-1">
                      <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                      <CheckIcon fontSize="16px" className ="ml-2  mr-2"></CheckIcon>
                        <div className="text-base" style ={{lineHeight:"16px"}}>
                          Develop a web3 app, create a project, deploy it in
                          production, write smart contracts, unit test them, and
                          create a user interface for them
                        </div>
                      </div>
                    </li>
                    <li className="w-1/2 my-1">
                      <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                      <CheckIcon fontSize="16px" className ="mr-2"></CheckIcon>
                        <div className = "text-base" style ={{lineHeight:"16px"}}>
                          The fundamentals of the Solidity smart contract language
                        </div>
                      </div>
                    </li>
                    <li className="w-1/2 my-1">
                      <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                      <CheckIcon fontSize="16px" className ="ml-2 mr-2"></CheckIcon>
                        <div className="text-base" style ={{lineHeight:"16px"}}>
                          How to deploy a decentralized app to various Ethereum
                          instances (testrpc, private chain, test chain, main net)
                        </div>
                      </div>
                    </li>
                    <li className="w-1/2 my-1">
                      <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                      <CheckIcon fontSize="16px" className ="mr-2"></CheckIcon>
                        <div className="text-base" style ={{lineHeight:"16px"}}>
                          The basics of how a blockchain generally works, just enough
                          to be able to use it as a development platform
                        </div>
                      </div>
                    </li>
                    <li className="w-1/2 my-1">
                      <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                      <CheckIcon fontSize="16px" className ="ml-2 mr-2"></CheckIcon>
                        <div className="text-base" style ={{lineHeight:"16px"}}>
                          How to combine the right tools to put together a consistent
                          and real world pragmatic development environment
                        </div>
                      </div>
                    </li>
                    <li className="w-1/2 my-1">
                      <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                      <CheckIcon fontSize="16px" className ="mr-2"></CheckIcon>
                        <div className="text-base" style ={{lineHeight:"16px"}}>
                          How to use the Truffle build and testing framework (covers
                          Truffle 4)
                        </div>
                      </div>
                    </li>
                    <li className="w-1/2 my-1">
                      <div className="flex items-start w-full h-auto text-left whitespace-normal tracking-normal">
                      <CheckIcon fontSize="16px" className ="ml-2 mr-2"></CheckIcon>
                        <div className="text-base" style ={{lineHeight:"16px"}}>How to unit test smart contracts</div>
                      </div>
                    </li>
                  </ul>
                </div>
                </div>
                <div className = "mt-8 text-2xl font-semibold">
                  Who this course is for
                </div>
                <div className= "mt-2">
                    <li>Duis blandit vestibulum orci</li>
                    <li>Duis blandit vestibulum orci</li>
                    <li>Duis blandit vestibulum orci</li>
                </div>
              </div>    
              <div className = "text-2xl my-8 font-semibold">
                  Course previews
              </div>
              <div>
                <CustomizedAccordions></CustomizedAccordions>
              </div>
              <div className = "text-2xl mt-8 font-semibold ">
                Ratings and reviews
              </div>
              <div className = "w-full">
                <div className = "mt-2 font-semibold text-xl">
                    Ratings
                </div>
                <div className = "flex flex-row">
                    <div className = "inline-flex flex-col px-8">
                      <div className=" text-yellow-500 mx-auto font-bold" style= {{fontSize:"64px"}}>
                        4.8
                      </div>
                      <div className = "">
                        <Rating name="read-only" value={4.8} precision={0.5} readOnly />
                      </div>
                    </div>
                    <div className= "my-auto w-3/4">
                      <div className = "w-full flex flex-row">
                        <div className = "h-2 my-2 w-full bg-gray-200">
                          <div className = "h-full bg-gray-500" style = {{width:"60%"}} >
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <Rating className = "my-auto ml-2" name="read-only" size = "small" value={5} readOnly />
                          <div className = "my-auto ml-2 text-sm text-gray-500">
                            60%
                          </div>
                        </div>
                      </div>
                      <div className = "w-full flex flex-row">
                        <div className = "h-2 my-2 w-full bg-gray-200">
                          <div className = "h-full bg-gray-500" style = {{width:"20%"}} >
                          </div>
                        </div>
                        <div className="flex">
                          <Rating className = "my-auto ml-2" name="read-only" size = "small" value={4} readOnly />
                          <div className = "my-auto ml-2 text-sm text-gray-500">
                            20%
                          </div>
                        </div>
                      </div>
                      <div className = "w-full flex flex-row">
                        <div className = "h-2 my-2 w-full bg-gray-200">
                          <div className = "h-full bg-gray-500" style = {{width:"10%"}} >
                          </div>
                        </div>
                        <div className="flex">
                          <Rating className = "my-auto ml-2" name="read-only" size = "small" value={3} readOnly />
                          <div className = "my-auto ml-2 text-sm text-gray-500">
                            10%
                          </div>
                        </div>
                      </div>
                      <div className = "w-full flex flex-row">
                        <div className = "h-2 my-2 w-full bg-gray-200">
                          <div className = "h-full bg-gray-500" style = {{width:"5%"}} >
                          </div>
                        </div>
                        <div className="flex">
                          <Rating className = "my-auto ml-2" name="read-only" size = "small" value={2} readOnly /> 
                          <div className = "my-auto ml-2 text-sm text-gray-500">
                            05%
                          </div>
                        </div>
                      </div>
                      <div className = "w-full flex flex-row">
                        <div className = "h-2 my-2 w-full bg-gray-200">
                          <div className = "h-full bg-gray-500" style = {{width:"5%"}} >
                          </div>
                        </div>
                        <div className="flex">
                          <Rating className = "my-auto ml-2" name="read-only" size = "small" value={1} readOnly />
                          <div className = "my-auto ml-2 text-sm text-gray-500">
                            05%
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                </div>
              <div className = "mt-8">
                  <div className = " text-xl font-medium">
                    Student feedback
                  </div>
                  <div className = "flex flex-row">
                    <div className = "text-lg mr-4 text-gray-700 font-bold">
                      Sort by: 
                    </div>
                    <div className = "flex">
                      <Rating
                        className = "my-auto"
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />  
                    </div>
                  </div>
                  <div className = "">
                    <StudentFeedback></StudentFeedback>
                  </div>
                  <div>

                  </div>
              </div>
          </div>

      </div>
      </div>
    </div>
  );
};
