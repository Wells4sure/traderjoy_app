import { combineReducers } from "redux";
import loginReducer from "./LoginSlice";
import posReducer from "./PosSlice";

const rootReducer = combineReducers({
  login: loginReducer,
  pos: posReducer,
});

export default rootReducer;
