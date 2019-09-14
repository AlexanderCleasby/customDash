import { combineReducers } from "redux";
import userReducer from "./users"
import dashboards from "./dashboards"

export default  combineReducers({
    user: userReducer,
    dashboards: dashboards
  });