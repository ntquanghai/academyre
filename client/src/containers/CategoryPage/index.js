import * as React from "react";
import {useState, useEffect, Fragment} from "react";
import { HpCarousel } from "../../components/HomepageCarousel";
import { TabPanel } from "../../components/TabPanel";
import { Rating } from "@mui/material";
import { CategoryAccordion } from "../../components/CategoryAccordion";
import { CategoryItem } from "../../components/CategoryAccordion/categoryItem";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { pink, grey } from '@mui/material/colors';


export const CategoryPage = () => {
    const [hpData, sethpData] = useState([])

    useEffect(() => {
        sethpData(
          [
            {
                name: "Random Name #1",
                description: "Probably the most random thing you have ever seen!",
                img: "/img/algo.jpg",
                author: "Author Full Name",
                ratings: {
                  score: 4.2,
                  raters: 392,
                },
                category: "Programming Languages",
                cost:{
                  current: "$29.99",
                  sale: {
                    cost: null,
                    available: null,
                    duration: null,
                  }
                }
            },
            {
                name: "Random Name #2",
                description: "Hello World!",
                img: "/img/react.jpg",
                author: "Friend2",
                ratings: {
                  score: 3.8,
                  raters: 392,
                },
                category: "Software Engineering",
                cost:{
                  current: "$29.99",
                  sale: {
                    cost: null,
                    available: null,
                    duration: null,
                  }
                }
                
            },
            {
                name: "Random Name #3",
                description: "Probably the most random thing you have ever seen!",
                img: "/img/python.jpg",
                author: "Friend3",
                ratings: {
                  score: 4.5,
                  raters: 392,
                },
                category: "Engineering",
                cost:{
                  current: "$29.99",
                  sale: {
                    cost: "$19.99",
                    available: true,
                    duration: new Date(2022,4,13),
                  }
                }
            },
            {
                name: "Random Name #4",
                description: "Hello World!",
                img: "/img/js.png",
                author: "Friend4",
                ratings: {
                  score: 4.9,
                  raters: 392,
                },
                category: "Engineering",
                cost:{
                  current: "$29.99",
                  sale: {
                    cost: null,
                    available: null,
                    duration: null,
                  }
                }
            },
            {
                name: "Random Name #5",
                description: "Probably the most random thing you have ever seen!",
                img: "/img/java.jpg",
                author: "Friend5",
                ratings: {
                  score: 4.8,
                  raters: 392,
                },
                category: "Programming Languages",
                cost:{
                  current: "$29.99",
                  sale: {
                    cost: null,
                    available: null,
                    duration: null,
                  }
                }
            },
            {
                name: "Random Name #6",
                description: "Hello World!",
                img: "/img/infotech.jpg",
                author: "Friend6",
                ratings: {
                  score: 4.6,
                  raters: 392,
                },
                category: "Software Engineering",
                cost:{
                  current: "$29.99",
                  sale: {
                    cost: null,
                    available: null,
                    duration: null,
                  }
                }
            },
            {
                name: "Random Name #7",
                description: "Probably the most random thing you have ever seen!",
                img: "/img/cpp.jpeg",
                author: "Friend7",
                ratings: {
                  score: 4.3,
                  raters: 392,
                },
                category: "Engineering",
                cost:{
                  current: "$29.99",
                  sale: {
                    cost: "$19.99",
                    available: true,
                    duration: "29/11/2022",
                  }
                }
            },
            {
                name: "Random Name #8",
                description: "Hello World!",
                img: "/img/cal.jpeg",
                author: "Friend8",
                ratings: {
                  score: 4.5,
                  raters: 392,
                },
                category: "Software Engineering",
                cost:{
                  current: "$29.99",
                  sale: {
                    cost: "$19.99",
                    available: true,
                    duration: new Date(2022,11,29),
                  }
                }
            }
          ]
        )
      },
      []
    )
  
    if(hpData.length === 0) {
      return <div></div>
    }
    else {
      return (
        <Fragment>
            <div className = "flex flex-col bg-amber-200 shadow-inner py-10 px-10 w-3/4 mx-auto" style={{height:"240px"}}>
              <div className = "font-bold text-center flex" style = {{fontSize: "28px", fontFamily: "'Open Sans', sans-serif"}}>
                Programming Languages
              </div>
              <div className = " text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis interdum libero, ut scelerisque massa porta hendrerit. Suspendisse potenti. Nulla facilisi. Donec a quam id nibh placerat fermentum a nec ipsum. Proin quis dui eget lorem varius euismod. Cras facilisis sed tortor ut viverra
              </div>
            </div>
            <div className="py-10 w-3/4 m-auto ">
                <div className="font-semibold text-3xl mb-4">
                Recommended courses
                </div>
                <Fragment>
                  <TabPanel></TabPanel>
                  <HpCarousel 
                      data = {hpData}
                  ></HpCarousel>
                </Fragment>
                <a className=" my-4 w-full hover:opacity-90" href="">
                  <div className="font-semibold text-3xl mb-6">
                    Featured Course
                  </div>
                  <div className = "w-full border p-6 flex flex-row mx-auto" style = {{height:"300px"}}>
                      <div className="">
                        <img src = "\img\algo.jpg" className="h-full"></img>
                      </div>
                      <div className = "w-1/2 flex-grow flex flex-col ml-8">
                        <div className = "font-semibold " style={{fontSize:"24px",overflowWrap: "break-word"}}>
                          {hpData[0].name}
                        </div>
                        <div className = "text-xl" style = {{overflowWrap: "break-word"}}>
                          {hpData[0].description} asdfkljhsadjkfgasjdg fhjsdagjhfgadshfgjha sdgfsdhjfgahjs gfjgsdhjgjasdgfgasdhjfghjadsgfhj
                        </div>
                        <div className = "text-sm mb-2 text-gray-500">
                          {hpData[0].author}
                        </div>
                        <div className = "flex flex-row">
                          <div className = "text-green-800 text-xs">
                            Last updated: <b>24/02/2022</b> 
                          </div>
                          <div className = "ml-4 text-xs text-gray-500">
                            34 hours 
                          </div>
                          <div className = "mx-2 text-xs text-gray-500">•</div>
                          <div className = "text-xs text-gray-500">
                            11 lectures
                          </div>
                          <div className = "mx-2 text-xs text-gray-500">•</div>
                          <div className = "text-xs text-gray-500">
                            Intermediate
                          </div>                         
                        </div>
                          <div className = "flex flex-row mt-2">
                            <div className = "text-sm mr-1 font-semibold text-yellow-600">
                                {hpData[0].ratings.score} 
                              </div>
                              <Rating sx = {{color:"rgb(245 158 11)"}} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly size="small"/>
                              <div className = "text-sm mr-1 text-gray-500"><p/>({hpData[0].ratings.raters})</div>
                          </div>
                          <div className = "mt-auto text-lg font-semibold">$10.99</div>

                      </div>
                  </div>
                </a>
                <div>
                  <div className="font-semibold text-3xl mt-8 mb-6">
                    All courses about Programming Languages
                  </div>
                  <div className = "flex flex-row">
                    <div>
                    <CategoryAccordion></CategoryAccordion>

                    </div>
                    
                    <div className = "px-8 ml-10 flex flex-col flex-grow">
                      <div className = "inline-block">
                        <FormControl fullWidth >
                          <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                          <Select
                            label="Sort by"
                            className = "rounded-none text-black border-black outline-black bg-gray-50"
                          >
                            <MenuItem value={10}>Newest</MenuItem>
                            <MenuItem value={20}>Highest rated</MenuItem>
                            <MenuItem value={30}>Most popular</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    {hpData.map((courseData, index) => {
                      return (
                        <CategoryItem
                          img={courseData.img}
                          courseName={courseData.name}
                          desc={courseData.description}
                          author={courseData.author}
                          ratings={courseData.ratings}
                          category = {courseData.category}
                          cost = {courseData.cost}
                        ></CategoryItem>
                        );
                    })}
                    </div>
                  </div>
                </div>
            </div>
        </Fragment>
      )
    };
    }
