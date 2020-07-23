import axios from "axios";
import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAILED, USER_LOADED, AUTH_ERROR, LOGOUT} from "./types";
import {setAlert} from "./alertActions";
import setAuthToken from "../utils/setAuthToken";
// Register user
export const register = ({username,password,firstName,lastName,email,status,bio}) => async dispatch =>{
    const config = {
        headers:{
            'Content-type':'application/json'
        }
    };
    const body = JSON.stringify({username,password,firstName,lastName,email,status,bio});
    try {
        const res = await axios.post('/users',body,config);
        console.log(res);
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        });
        dispatch(setAlert("User registered","success"));
    }catch (e) {
        const errors = e.response.data.errors;

        if(errors){
            Object.keys(errors).forEach(err => dispatch(setAlert(errors[err],'danger')));
        }
        dispatch({type:REGISTER_FAIL});
    }
};
export const login = ({username,password}) => async dispatch => {
    const config = {
        headers:{
            'Content-type':'application/json'
        }
    };
    const body = JSON.stringify({username,password});
    try {
        const res = await axios.post('/users/authenticate',body,config);
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
        dispatch(loadUser());
    }catch (e) {
        const errors = e.response.data.errors;

        if(errors){
            Object.keys(errors).forEach(err => dispatch(setAlert(errors[err],'danger')));
        }
        dispatch({
            type:LOGIN_FAILED
        })
    }
};
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        let bearerToken = "Bearer ";
        let res = bearerToken.concat(localStorage.token);
        setAuthToken(res);
    }
    try {
        const res = await axios.get('/users/user');
        dispatch({
            type:USER_LOADED,
            payload:res.data
        })
    }catch (e) {
        dispatch({
            type:AUTH_ERROR
        })
    }
};
export const logout = () => dispatch =>{
    /*dispatch({
        type:CLEAR_PROFILE
    })*/
    dispatch({
        type:LOGOUT
    })
};