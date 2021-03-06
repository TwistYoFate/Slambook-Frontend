/*
  In this file all reducers are combined
  into a single reducer.
*/

import BlogReducer from "./BlogReducer";
import UserReducer from "./UserReducer";
import { combineReducers } from "redux";

const Reducers = combineReducers({ blogs: BlogReducer, user: UserReducer });

export default Reducers;
