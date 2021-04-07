import { call,put,takeLatest } from "redux-saga/effects";
import Actions from "../../../Actions/Actions";
import axios from 'axios'
import Apis from "../../../../Utils/Apis";
import {config} from '../../../../../config'

//Request

function BlogAllRequest(){
  return Apis.get(config.SERVER_BASE_URL + "/blogs"); 
}

function BlogLikeRequest(payload){
  console.log("BlogLikeRequest ,",payload);
  let tok = localStorage.getItem('token');
  const token = `Bearer ${tok.substring(1,tok.length-1)}`;
  console.log(token);
  return Apis.patch(config.SERVER_BASE_URL + "/blogs/likeUnlike",payload,token); 
}

function BlogCreateRequest(payload){
  console.log("BlogCreateRequest ,",payload);
  let tok = localStorage.getItem('token');
  const token = `Bearer ${tok.substring(1,tok.length-1)}`;
  console.log(token);
  return Apis.post(config.SERVER_BASE_URL + "/blogs/create",payload,token); 
}

function BlogDeleteRequest(payload){
  console.log("BlogDeleteRequest ,",payload);
  let tok = localStorage.getItem('token');
  const token = `Bearer ${tok.substring(1,tok.length-1)}`;
  console.log(token);
  return Apis.Delete(config.SERVER_BASE_URL + "/blogs/delete",payload,token); 
}

//Worker

function* BlogAllWorker(action) {
  try {
    const data = yield call(BlogAllRequest);
    if(data.isSuccessful){
      yield put({
        type: Actions.BlogActions.SET_ALL_BLOGS_TO_STORE,
        payload: data.payload.blogs
      });
    }
    
  } catch (e) {
    console.log(e);
  }
}

function* BlogLikeWorker(action) {
  try {
    console.log(action.payload);
    const data = yield call(BlogLikeRequest,action.payload);
    if(data.isSuccessful){
      yield put({
        type: Actions.BlogActions.SAVE_LIKE_TO_STORE,
        payload: data.payload
      });
    }
    
  } catch (e) {
    console.log(e);
  }
}

function* BlogCreateWorker(action) {
  try {
    console.log(action.payload);
    const data = yield call(BlogCreateRequest,action.payload);
    if(data.isSuccessful){
      yield put({
        type: Actions.BlogActions.SAVE_BLOG_TO_STORE,
        payload: data.payload
      });
    }
    
  } catch (e) {
    console.log(e);
  }
}

function* BlogDeleteWorker(action) {
  try {
    console.log(action.payload);
    const data = yield call(BlogDeleteRequest,action.payload);
    if(data.isSuccessful){
      yield put({
        type: Actions.BlogActions.DELETE_BLOG_FROM_STORE,
        payload: action.payload
      });
    }
  } catch (e) {
    console.log(e);
  }
}

//Watcher

function* BlogAllWatcher() {
  yield takeLatest(Actions.BlogActions.GET_ALL_BLOGS_FROM_DB, BlogAllWorker);
  
}

function* BlogLikeWatcher() {
  yield takeLatest(Actions.BlogActions.SAVE_LIKE_TO_DB, BlogLikeWorker);
}

function* BlogCreateWatcher() {
  yield takeLatest(Actions.BlogActions.SAVE_BLOG_TO_DB, BlogCreateWorker);
}

function* BlogDeleteWatcher() {
  yield takeLatest(Actions.BlogActions.DELETE_BLOG_FROM_DB, BlogDeleteWorker);
}

export default {
  BlogAllWatcher,
  BlogLikeWatcher,
  BlogCreateWatcher,
  BlogDeleteWatcher,
}
