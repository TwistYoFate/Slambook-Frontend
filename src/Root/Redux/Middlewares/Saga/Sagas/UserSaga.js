import { call, put, takeLatest } from "redux-saga/effects";
import Actions from "../../../Actions/Actions";

//Worker

function* UserWorker({ payload }) {
  try {
    const res = yield call(UserRequests, payload);
    console.log(res.status);
  } catch (e) {
    console.log(e);
  }
}

//Watcher

export default function* UserWatcher() {
  yield takeLatest(Actions.UserActions.REGISTER_USER_TO_DB, UserWorker);
}
