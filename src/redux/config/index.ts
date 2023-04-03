import { isLoginReducer } from "../modules/isLogin/isLoinReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLogin: isLoginReducer,
});

export default rootReducer;
