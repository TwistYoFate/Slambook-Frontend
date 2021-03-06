import {all,fork} from "redux-saga/effects"

import BlogWatcher from './Sagas/BlogSaga'
import UserWatcher from './Sagas/UserSaga'

export default function* Watchers(){
    yield all([
        fork(BlogWatcher),
        fork(UserWatcher)
    ]
    )
}