/*
  In this module we will be
    - Creating the Redux Store
    - Initializing and connecting all Redux-middlewares to Redux 
*/

import { createStore } from "redux";
import Reducers from "./Reducers/Reducers";

const store = createStore(Reducers);

export default store;
