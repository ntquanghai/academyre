import { TOGGLE_FAVOURITE_COURSE } from "../type";

const initialState = {
  todos: [
        {   id: 0,
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
            },
            favourite: false
        },
        {
            id: 1,
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
            },
            favourite: false
            
        },
        {
          id: 2,
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
            },
            favourite: false
        },
        {
          id: 3,
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
            },
            favourite: false
        },
        {
          id: 4,
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
            },
            favourite: false
        },
        {
          id: 5,
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
            },
            favourite: false
        },
        {
          id: 6,
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
            },
            favourite: false
        },
        {
          id: 7,
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
            },
            favourite: false
        }
  ],
  activeTodo: null,
};

const favReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_FAVOURITE_COURSE:
      // Logic update todo status
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === payload) {
          todo["favourite"] = !todo["favourite"];
        }
        return todo;
      });

      state.todos = updatedTodos;

      // REMEMBER: always return the copy of state
      return { ...state };
    default:
      return state;
  }
};

export default favReducer;