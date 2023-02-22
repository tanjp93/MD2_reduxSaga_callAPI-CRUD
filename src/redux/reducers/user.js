import { USER_SUCCESS } from "../constants/actionTypes";



export const users = (state = [], action) => {
    switch (action.type) {
        case USER_SUCCESS:
            return [...action.payload];
        default:
            return state;
    }
}