import { combineReducers } from "redux";
import reducer from "./sectionReducer";

const rootReducer = combineReducers({
  todo: reducer
});

export default rootReducer;
