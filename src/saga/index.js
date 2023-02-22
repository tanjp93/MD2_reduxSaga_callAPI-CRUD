import {all, takeLatest} from "redux-saga/effects"
import { USER_DELETE, USER_GET, USER_PATCH, USER_POST } from "../redux/constants/actionTypes"
import { USER_SAGA_DELETE, USER_SAGA_GET, USER_SAGA_POST ,USER_SAGA_PATCH} from "./userSaga"

export const rootSaga=function*(){
    yield all([
        takeLatest(USER_GET,USER_SAGA_GET),
        takeLatest(USER_POST,USER_SAGA_POST),
        takeLatest(USER_DELETE,USER_SAGA_DELETE),
        takeLatest(USER_PATCH,USER_SAGA_PATCH)
    ])
}