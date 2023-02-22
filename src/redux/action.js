import * as actionTypes from "./constants/actionTypes";


export const act_get_user=()=>{
    return {
        type: actionTypes.USER_GET
    }
}


export const act_post_user=(payload)=>{
    return {
        type: actionTypes.USER_POST,
        payload
    }
}
export const act_get_success=(type,payload)=>{
    return {
        type: type,
        payload
    }
}
export const act_delete_user=(payload)=>{
    return {
        type: actionTypes.USER_DELETE,
        payload
    }
}
export const act_patch_user=(payload)=>{
    return {
        type: actionTypes.USER_PATCH,
        payload
    }
}