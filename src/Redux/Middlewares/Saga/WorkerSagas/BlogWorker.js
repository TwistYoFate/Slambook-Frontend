import { call, put } from "redux-saga/effects";
import Actions from "../../../Actions/Actions";
import BlogRequests from "./Requests/BlogRequests";

export default function* BlogWorker(action) {
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
