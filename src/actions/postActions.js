import axios from 'axios';
import {CREATE_POST, LOAD_POSTS, LOAD_POSTS_FOR_USER} from "./types";
import {setAlert} from "./alertActions";

export const loadPosts = () => async dispatch => {
    try {
        const res = await axios.get(`/users/user/posts/all`);
        dispatch({
            type:LOAD_POSTS,
            payload:res.data
        })
    }catch (e) {

    }
};
export const createPost = (formData) => async dispatch => {
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    };
    try {
        const res = await axios.post(`/users/user/posts`,formData,config);
        dispatch({
            type:CREATE_POST,
            payload:res.data
        });
        dispatch(setAlert("Post submitted","success"))
    }catch (e) {
        const errors = e.response.data.errors;

        if(errors){
            Object.keys(errors).forEach(err => dispatch(setAlert(errors[err],'danger')));
        }
    }
};
export const loadPostsForUser = () => async dispatch => {
    try {
        const res = await axios.get(`/users/user/posts`);
        dispatch({
            type:LOAD_POSTS_FOR_USER,
            payload:res.data
        })
    }catch (e) {

    }
};