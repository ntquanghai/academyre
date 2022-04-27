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

  return (
    <div className="py-10 w-3/4 m-auto">
      <div className="font-semibold text-2xl mb-4">
        Wondering what to learn?
      </div>
      <Slider {...settings}>
        {data.map((courseData, index) => {
          return (
            <HpItem
              key={index}
              img={courseData.img}
              courseName={courseData.name}
              courseDesc={courseData.description}
              author={courseData.author}
            ></HpItem>
          );
        })}
      </Slider>
    </div>
  );
}
