import {all,fork} from "redux-saga/effects"

import BlogWatcher from './Sagas/BlogSaga'
import UserWatchers from './Sagas/UserSaga'

export default function* Watchers(){
    yield all([
        fork(BlogWatcher.BlogAllWatcher),
        fork(BlogWatcher.BlogLikeWatcher),
        fork(BlogWatcher.BlogCreateWatcher),
        fork(BlogWatcher.BlogDeleteWatcher),
        fork(UserWatchers.UserRegisterWatcher),
        fork(UserWatchers.UserLoginWatcher),
        fork(UserWatchers.UserReloginWatcher),
        fork(UserWatchers.UserUpdateWatcher),
        fork(UserWatchers.UserPasswordResetWatcher),
    ]
    )
}