import { instance } from "./axios";

export const USER_GET_SERVICE= async ()=>{
    let respone =await instance.get("users")
    return respone.data
}
export const USER_POST_SERVICE= async (newUser)=>{
    await instance.post("users",newUser)
}
export const USER_DELETE_SERVICE= async (id)=>{
    console.log(id);
    await instance.delete(`users/${id}`)
}
export const USER_PATCH_SERVICE= async (updateUser)=>{

    await instance.patch(`users/${updateUser.id}`,updateUser)
}
