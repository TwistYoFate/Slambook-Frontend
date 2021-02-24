/*
  In this module we will be
    - Creating the Redux Store
    - Initializing and connecting all Redux-middlewares to Redux 
*/

import { applyMiddleware, createStore } from "redux";
import Reducers from "./Reducers/Reducers";
import createSagaMiddleware from "redux-saga";
import BlogWatcher from "./Middlewares/Saga/WatcherSagas/BlogWatcher";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducers, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(BlogWatcher);
export default store;
