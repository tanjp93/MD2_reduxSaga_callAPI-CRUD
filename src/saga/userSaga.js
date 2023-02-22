import {call ,put} from 'redux-saga/effects'
import * as actionTypes from "../redux/constants/actionTypes";
import * as userServices from '../api/userService';
import * as act_redux from '../redux/action';

export const USER_SAGA_GET=function*(){
    try {
        let listUser = yield call(userServices.USER_GET_SERVICE)
        yield put(act_redux.act_get_success(actionTypes.USER_SUCCESS,listUser))
    } 
    catch (error) {
        console.log("USER_SAGA_GET error=>>" ,error );
    }
}

export const USER_SAGA_POST=function*(action){
    try {
        yield call(userServices.USER_POST_SERVICE,action.payload)
  
        yield USER_SAGA_GET()
    } 
    catch (error) {
        console.log("USER_SAGA_POST error=>>" ,error );
    }
}

export const USER_SAGA_DELETE=function*(id){
    try {
        yield call (userServices.USER_DELETE_SERVICE,id.payload)
        yield USER_SAGA_GET()
    } catch (error) {
        console.log("USER_SAGA_DEL error=>>" ,error );
    }
}
export const USER_SAGA_PATCH=function*(update){

    try {
        yield call(userServices.USER_PATCH_SERVICE, update.payload)
    } catch (error) {
        console.log("USER_SAGA_PATCH=>>>>");
    }
}