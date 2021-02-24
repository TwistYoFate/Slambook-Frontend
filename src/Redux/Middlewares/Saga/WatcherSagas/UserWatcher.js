import { takeLatest } from "redux-saga/effects";
import Actions from "../../../Actions/Actions";
import UserWorker from "../WorkerSagas/BlogWorker";

export default function* UserWatcher() {
  yield takeLatest(Actions.userActions.REGISTER_USER_TO_DB, UserWorker);
}
