import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAILED, LOGIN_SUCCESS,USER_LOADED,AUTH_ERROR,LOGOUT} from "../actions/types";

const initialState = {
    token:localStorage.getItem("token"),
    isLogged:false,
    loading:true,
    user:null
};

export default function (state=initialState,action) {
    const {type,payload} = action;
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isLogged:true,
                loading:false,
                user:payload
            }
        case REGISTER_SUCCESS:
            return state;
        case LOGIN_SUCCESS:
            localStorage.setItem("token",payload.token);
            return {
              ...state,
              ...payload,
              isLogged:true,
                loading:false
            };
        case REGISTER_FAIL:
        case LOGIN_FAILED:
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                token:null,
                isLogged:false,
                loading:false,
                user:null
            }
        default:
            return state
    }
}