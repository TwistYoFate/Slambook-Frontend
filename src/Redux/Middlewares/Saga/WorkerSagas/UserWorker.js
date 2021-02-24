import { call } from "redux-saga/effects";
import Actions from "../../../Actions/Actions";
import UserRequests from "./Requests/BlogRequests";

export default function* UserWorker({ payload }) {
  try {
    const res = yield call(UserRequests, payload);
    console.log(res.status);
  } catch (e) {
    console.log(e);
  }
}
