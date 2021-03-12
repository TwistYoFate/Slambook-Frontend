import { call,put,takeLatest } from "redux-saga/effects";
import Actions from "../../../Actions/Actions";
import axios from 'axios'

//Request

function BlogRequests(){
  return fetch("http://127.0.0.1:8000/todos/").then(res =>{return res.json()}).then(data=>{console.log("fetch",data);return data}).catch(e=>console.log("Unable to fetch blogs."))
}

//Worker

function* BlogWorker(action) {
  try {
    const data = yield call(BlogRequests);
    console.log("worker",data)
    yield put({
      type: Actions.BlogActions.SET_ALL_BLOGS_TO_STORE,
      payload: data
    });
  } catch (e) {
    console.log(e);
  }
}

//Watcher

export default function* BlogWatcher() {
  yield takeLatest(Actions.BlogActions.GET_ALL_BLOGS_FROM_DB, BlogWorker);
}
