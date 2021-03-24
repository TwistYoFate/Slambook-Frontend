import {all,fork} from "redux-saga/effects"

import BlogWatcher from './Sagas/BlogSaga'
import UserWatchers from './Sagas/UserSaga'

export default function* Watchers(){
    yield all([
        fork(BlogWatcher),
        fork(UserWatchers.UserRegisterWatcher),
        fork(UserWatchers.UserLoginWatcher),
    ]
    )
}