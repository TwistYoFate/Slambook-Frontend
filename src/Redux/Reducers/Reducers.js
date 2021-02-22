/*
  In this file all reducers are combined
  into a single reducer.
*/
import blogReducer from "./blogReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const Reducers = combineReducers({ blogs: blogReducer, user: userReducer });

export default Reducers;
