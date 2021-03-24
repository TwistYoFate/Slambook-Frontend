import { call, put, takeLatest } from "redux-saga/effects";
import Actions from "../../../Actions/Actions";
import api from "../../../../Utils/Apis";

//Request

function UserRegisterRequest(payload){
  return api.post("http://localhost:5000/auth/signup",payload);
}
function UserLoginRequest(payload){
  return api.post("http://localhost:5000/auth/login",payload);
}

//Worker

function* UserRegisterWorker({ payload }) {
  try {
    const data = yield call(UserRegisterRequest, payload);
    if(data.isSuccessful){
      console.log("baba");
      console.log(data);
      alert("User registered successfully");
    }
    else{
      throw error;
    }
  } catch (e) {
    console.log(e);
  }
}

function* UserLoginWorker({ payload }) {
  try {
    const data = yield call(UserLoginRequest, payload);
    console.log("haha");
    console.log(data);
    if(data.isSuccessful){
      //save token in localStorage
      localStorage.setItem("token",JSON.stringify(data.payload.token));
      console.log(data);
      yield put({
        type:Actions.UserActions.LOGIN_USER_RESPONSE,
        payload:data.user,
      })
    }
    else{
      throw error;
    }
  } catch (e) {
    console.log(e);
  }
}

//Watcher

function* UserRegisterWatcher() {
  yield takeLatest(Actions.UserActions.REGISTER_USER_TO_DB, UserRegisterWorker);
}

function* UserLoginWatcher(){
  yield takeLatest(Actions.UserActions.LOGIN_USER, UserLoginWorker);
}

export default {
  UserRegisterWatcher,
  UserLoginWatcher
}

