import { types } from "../type/type";

export const authReducer = (state = {}, action:any) =>{
    switch (action.type) {
        case types.save:
            return {
                ...action.payload
            }
        break;
        default:
            return state;
        break;
    }
}