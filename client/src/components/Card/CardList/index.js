import { Pagination, Stack } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "..";
import usePagination from "../../../hooks/usePagination";
import { CategoryItem } from "../../CategoryAccordion/categoryItem";

export const ProductCardList = (props) => {
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
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(hpData.length / PER_PAGE);
  const _DATA = usePagination(hpData, PER_PAGE);
  const changeHandler = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  useEffect(() => {
    console.log("use effect");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);
  return (
    <Fragment>
      {_DATA
        ? _DATA
            .currentData()
            .map((product, index) => <CategoryItem key={index} />)
        : "Can't not find this keyword"}
      <Stack spacing={2}>
        <Pagination
          count={count}
          size="large"
          page={page}
          onChange={changeHandler}
          color="primary"
          className="mx-auto"
        />
      </Stack>
    </Fragment>
  );
};
