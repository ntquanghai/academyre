import React from "react";
import Slider from "react-slick";
import { HpItem } from "../HomepageItem";

export function HpCarousel(props) {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  const data = props.data;

  const list = ["New and Interesting","Hot in Programming Languages","Students are viewing"]

  return (
    <div className="py-10 w-3/4 m-auto ">
      <div className="font-semibold text-3xl mb-4">
        Wondering what to learn?
      </div>
      {list.map((listData, index) =>{
        return(
          <div className = "font-semibold text-xl mb-16">
            {listData}
          <div className = "mt-4 font-normal text-base">
            <Slider {...settings}>
            {data.map((courseData, index) => {
              return (
                <HpItem
                  key={index}
                  img={courseData.img}
                  courseName={courseData.name}
                  desc={courseData.description}
                  author={courseData.author}
                  ratings={courseData.ratings}
                  category = {courseData.category}
                  cost = {courseData.cost}
                ></HpItem>
              );
            })}
            </Slider>
          </div>
          </div>
        )
      })}
      {/* <div className = "font-semibold text-xl mb-16">
        New and interesting
        <div className = "mt-4 font-normal text-base">
          <Slider {...settings}>
          {data.map((courseData, index) => {
            return (
              <HpItem
                key={index}
                img={courseData.img}
                courseName={courseData.name}
                desc={courseData.description}
                author={courseData.author}
                ratings={courseData.ratings}
              ></HpItem>
            );
          })}
        </Slider>
        </div>
      </div>
      <div className = "font-semibold text-xl mb-16">
        Hot in Programming Languages
        <div className = "mt-4 font-normal text-base">
          <Slider {...settings}>
          {data.map((courseData, index) => {
            return (
              <HpItem
                key={index}
                img={courseData.img}
                courseName={courseData.name}
                desc={courseData.description}
                author={courseData.author}
                ratings={courseData.ratings}
                category = {courseData.category}
                cost = {courseData.cost}
              ></HpItem>
            );
          })}
          </Slider>
        </div>
      </div>
      <div className = "font-semibold text-xl mb-16">
        Students are viewing
        <div className = "mt-4 font-normal text-base">
          <Slider {...settings}>
          {data.map((courseData, index) => {
            return (
              <HpItem
                key={index}
                img={courseData.img}
                courseName={courseData.name}
                desc={courseData.description}
                author={courseData.author}
                ratings={courseData.ratings}
              ></HpItem>
            );
          })}
        </Slider>
        </div>
      </div> */}
    </div>
  );
}
