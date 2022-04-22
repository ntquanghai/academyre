import React, {useState, useEffect} from "react";
import Header from "../../layouts/Header";
import { HpCarousel } from "../../components/HomepageCarousel/hpCarousel";

export const Homepage = () => {
  const [hpData, sethpData] = useState([])

  useEffect(() => {
      sethpData(
        [
          {
              name: "Random Name #1",
              description: "Probably the most random thing you have ever seen!",
              img: "./img/algo.jpg",
              author: "Friend1"
          },
          {
              name: "Random Name #2",
              description: "Hello World!",
              img: "./img/react.jpg",
              author: "Friend2"
          },
          {
              name: "Random Name #3",
              description: "Probably the most random thing you have ever seen!",
              img: "./img/python.jpg",
              author: "Friend3"
          },
          {
              name: "Random Name #4",
              description: "Hello World!",
              img: "./img/js.png",
              author: "Friend4"
          },
          {
              name: "Random Name #5",
              description: "Probably the most random thing you have ever seen!",
              img: "./img/java.jpg",
              author: "Friend5"
          },
          {
              name: "Random Name #6",
              description: "Hello World!",
              img: "./img/infotech.jpg",
              author: "Friend6"
          },
          {
              name: "Random Name #7",
              description: "Probably the most random thing you have ever seen!",
              img: "./img/cpp.jpeg",
              author: "Friend7"
          },
          {
              name: "Random Name #8",
              description: "Hello World!",
              img: "./img/cal.jpeg",
              author: "Friend8"
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
    console.log(hpData)
    return (
      <div>
        <Header/>
        <div className = "">
          <div className = "flex w-full bg-slate-100 shadow-inner px-60">
            <div className = "py-10  font-semibold  w-1/2 flex" style = {{height: "300px", fontSize: "28px", fontFamily: "'Open Sans', sans-serif"}}>
              <div className = "m-auto">
                Welcome back, username!
                <br/>
                <div className = "font-normal text-2xl">This is where you left off.</div>
              </div>
            </div>
            <div className = "flex-grow flex relative">
              <div className = "py-6 px-6 bg-white shadow-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row justify-between" style = {{width: "480px", height: "240px"}}>
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
          <div className = "bg-white">
            <HpCarousel 
              data = {hpData}
            ></HpCarousel>
          </div>
        </div>
      </div>
    )
  };
  }
  
