import { call, put, takeLatest } from "redux-saga/effects";
import Actions from "../../../Actions/Actions";
import api from "../../../../Utils/Apis";

//Request

function UserRegisterRequest(payload){
  console.log("request , ",payload)
  return api.post("http://localhost:5000/auth/signup",payload);
}

function UserLoginRequest(payload){
  return api.post("http://localhost:5000/auth/login",payload);
}

function UserReloginRequest(){
  let tok = localStorage.getItem('token');
  const token = `Bearer ${tok.substring(1,tok.length-1)}`;
  return api.get("http://localhost:5000/auth/relogin",token);
}

function UserUpdateRequest(payload){
  console.log("update , ",payload)
  let tok = localStorage.getItem('token');
  const token = `Bearer ${tok.substring(1,tok.length-1)}`;
  return api.patch("http://localhost:5000/auth/update",payload,token);
}

function* UserPasswordResetRequest(payload){
  console.log("reset , ",payload)
  return api.post("http://localhost:5000/auth/reset",payload);
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
      console.log("bhai ",data);
      yield put({
        type:Actions.UserActions.LOGIN_USER_RESPONSE,
        payload:data.payload,
      })
    }
    else{
      throw "Wrong Credentials";
    }
  } catch (e) {
    console.log(e);
  }
}

function* UserReloginWorker() {
  try {
    const data = yield call(UserReloginRequest);
    console.log("haha");
    console.log(data);
    if(data.isSuccessful){
      //save token in localStorage
      localStorage.setItem("token",JSON.stringify(data.payload.token));
      console.log("relogin data ",data);
      yield put({
        type:Actions.UserActions.LOGIN_USER_RESPONSE,
        payload:data.payload,
      })
    }
    else{
      throw error;
    }
  } catch (e) {
    console.log(e);
  }
}

function* UserUpdateWorker({ payload }) {
  try {
    const data = yield call(UserUpdateRequest, payload);
    if(data.isSuccessful){
      console.log("Update");
      yield put({
        type:Actions.UserActions.UPDATE_USER_TO_STORE,
        payload:data.payload.user
      })
    }
    else{
      throw error;
    }
  } catch (e) {
    console.log(e);
  }
}

function* UserPasswordResetWorker({ payload }) {
  try {
    const data = yield call(UserPasswordResetRequest, payload);
    if(data.isSuccessful){
      console.log("password reset");
      console.log(data);
      // alert("User registered successfully");
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

function* UserReloginWatcher(){
  yield takeLatest(Actions.UserActions.RELOGIN_USER_USING_TOKEN, UserReloginWorker);
}

function* UserUpdateWatcher() {
  yield takeLatest(Actions.UserActions.UPDATE_USER_TO_DB, UserUpdateWorker);
}

function* UserPasswordResetWatcher() {
  yield takeLatest(Actions.UserActions.RESET_PASSWORD, UserPasswordResetWorker);
}

export default {
  UserRegisterWatcher,
  UserLoginWatcher,
  UserReloginWatcher,
  UserUpdateWatcher,
  UserPasswordResetWatcher,
}

