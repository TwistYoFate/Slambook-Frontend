import { call,put,takeLatest } from "redux-saga/effects";
import Actions from "../../../Actions/Actions";
import axios from 'axios'

//Request

function BlogRequests(){
  return axios.get("http://127.0.0.1:8000/todos/").then(res =>{return res}).catch(e=>console.log("Unable to fetch blogs."))
}

//Worker

function* BlogWorker(action) {
  try {
    const res = yield call(BlogRequests);
    const { data } = res;
    yield put({
      type: Actions.blogActions.GET_ALL_BLOGS_FROM_DB,
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
