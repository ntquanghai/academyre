import React, {useState, useEffect, Fragment} from "react";
import Header from "../../layouts/Header";
import { HpCarousel } from "../../components/HomepageCarousel";
import { useMediaQuery } from "../../hooks/getScreenSize";

export const Homepage = () => {
  const [hpData, sethpData] = useState([])
  const [listData, setListData] = useState([])
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
      setListData(
        ["New and Interesting","Hot in Programming Languages","Students are viewing"]
      )
    },
    []
  )

  const viewport = useMediaQuery();
  const { width, height } = viewport;


  if(hpData.length === 0) {
    return <div></div>
  }
  else {
    if(width > 800) 
      return (
        <Fragment>
            <div className = "flex bg-amber-200 shadow-inner py-10 px-10 w-3/4 mx-auto">
              <div className = "py-10  font-semibold  w-1/2 flex" style = {{height: "300px", fontSize: "28px", fontFamily: "'Open Sans', sans-serif"}}>
                <div className = "m-auto font-serif">
                  Welcome back, username!
                  <br/>
                  <div className = "font-normal text-2xl font-serif">This is where you left off.</div>
                </div>
              </div>
              <div className = "flex-grow flex relative">
                <div className = "py-6 px-6 border border-black bg-white shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row justify-between" style = {{width: "480px", height: "240px"}}>
                  <div className = "flex flex-col justify-between">
                    <div>
                      <div className = "font-semibold text-xl">Latest course</div>
                      <div className = "">Learning Information Technology</div>
                      <div className = "font-normal text-gray-400 text-sm italic">
                          Lance Armstrong
                      </div>
                    </div>
                    <div>
                      <button className = "py-1 px-4 border border-black hover:bg-gray-100">Continue</button>
                    </div>
                  </div>
                  <div className = "flex flex-col justify-between py-8">
                    <div className = "font-semibold">
                      Last chapter:
                      <div className = "font-normal">
                        Chapter 6: HTTP
                      </div>
                    </div>
                    <div className = "font-semibold">
                      Last access date:
                      <div className = "font-normal">
                        24/03/2019
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10 w-3/4 m-auto ">
              <div className="font-semibold text-3xl mb-4">
                Wondering what to learn?
              </div>
              <Fragment>
                {
                  listData.map((data, index) =>{
                    return(
                      <div className = "font-semibold text-xl mb-16">
                        {data}
                      <div className = "mt-4 font-normal text-base">
                        <HpCarousel
                          data = {hpData}
                        ></HpCarousel>
                      </div>
                      </div>
                    )
                  })
                }
              </Fragment>
            </div>
        </Fragment>
    )
    else
      return(
        <Fragment>
        <div className = "flex bg-amber-200 shadow-inner py-10 px-10 w-full mx-auto">
          <div className = "flex-grow flex relative">
              <div className = "flex flex-col justify-between">
                <div className = "m-auto font-serif text-xl font-semibold">
                  Welcome back, username!
                  <div className = "mt-2 font-normal text-sm font-serif">You last studied <b>Learning Information Technology</b> by Lance Armstrong.</div>
                  <div className = "mt-2 font-bold text-lg font-serif">Click here to continue!</div>
                </div>
              </div>
          </div>
        </div>
        <div className="py-10 w-3/4 m-auto ">
          <div className="font-semibold text-xl mb-4">
            Wondering what to learn?
          </div>
          <Fragment>
            {
              listData.map((data, index) =>{
                return(
                  <div className = "font-semibold text mb-16">
                    {data}
                  <div className = "mt-4 font-normal text-base">
                    <HpCarousel
                      data = {hpData}
                    ></HpCarousel>
                  </div>
                  </div>
                )
              })
            }
          </Fragment>
        </div>
    </Fragment>
      )
  }
  }
  
