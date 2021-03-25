import { call,put,takeLatest } from "redux-saga/effects";
import Actions from "../../../Actions/Actions";
import axios from 'axios'
import Apis from "../../../../Utils/Apis";

//Request

function BlogAllRequest(){
  return Apis.get("http://localhost:5000/blogs"); 
}

function BlogLikeRequest(payload){
  console.log("BlogLikeRequest ,",payload);
  let tok = localStorage.getItem('token');
  const token = `Bearer ${tok.substring(1,tok.length-1)}`;
  console.log(token);
  return Apis.patch("http://localhost:5000/blogs/likeUnlike",payload,token); 
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

//Watcher

function* BlogAllWatcher() {
  yield takeLatest(Actions.BlogActions.GET_ALL_BLOGS_FROM_DB, BlogAllWorker);
  
}

function* BlogLikeWatcher() {
  yield takeLatest(Actions.BlogActions.SAVE_LIKE_TO_DB, BlogLikeWorker);
}

export default {
  BlogAllWatcher,
  BlogLikeWatcher
}
