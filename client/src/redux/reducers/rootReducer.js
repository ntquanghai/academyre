import { combineReducers } from "redux";
import reducer from "./sectionReducer";
import favReducer from "./favouriteReducer";

const rootReducer = combineReducers({
  todo: reducer,
  fav: favReducer,
});

export default rootReducer;
