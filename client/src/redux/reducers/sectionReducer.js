import { TOGGLE_FINISHED_SESSION } from "../type";

const initialState = {
  todos: [
    {
      id: 1,
      name: "Learning ReactJS",
      finished: true,
    },
    {
      id: 2,
      name: "Learning Devops",
      finished: false,
    },
    {
      id: 3,
      name: "Learning Business Analysis",
      finished: false,
    },
    {
      id: 4,
      name: "Learning Business Analysis",
      finished: false,
    },
    {
      id: 5,
      name: "Learning Business Analysis",
      finished: false,
    },
    {
      id: 6,
      name: "Learning Business Analysis",
      finished: false,
    },
    {
      id: 7,
      name: "Learning Business Analysis",
      finished: false,
    },
  ],
  activeTodo: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_FINISHED_SESSION:
      // Logic update todo status
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === payload) {
          todo["finished"] = !todo["finished"];
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

export default reducer;