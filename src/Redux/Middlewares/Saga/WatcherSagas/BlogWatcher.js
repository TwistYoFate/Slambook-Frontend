import { takeLatest } from "redux-saga/effects";
import Actions from "../../../Actions/Actions";
import BlogWorker from "../WorkerSagas/BlogWorker";

export default function* BlogWatcher() {
  yield takeLatest(Actions.blogActions.GET_ALL_BLOGS_FROM_DB, BlogWorker);
}
