import {
    EDUCATION_CREATED,
    GET_EDUCATIONS,
    GET_EDUCATION,
    DELETE_EDUCATION,
    EDIT_EDUCATION,
    LOGIN_FAILED
} from "./types";
import {setAlert} from "./alertActions";
import axios from 'axios'
export const createEducation = (formData) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        };
        const res = await axios.post(`users/user/educations`,formData,config);
        dispatch({
            type:EDUCATION_CREATED
        });
        dispatch(setAlert("Education created",'success'));
    }catch (e) {
        const errors = e.response.data.errors;

        if(errors){
            Object.keys(errors).forEach(err => dispatch(setAlert(errors[err],'danger')));
        }
    }
};
export const getEducation = ({educationId}) => async dispatch => {
    try {
        const res = await axios.get(`users/user/educations/${educationId}`);
        dispatch({
            type:GET_EDUCATION,
            payload:res.data
        })
    }catch (e) {

    }
};
export const getEducations = () => async dispatch => {
    try {
        const res = await axios.get(`users/user/educations`);
        dispatch({
            type:GET_EDUCATIONS,
            payload:res.data
        })
    }catch (e) {

    }
};
export const editEducation = (formData,{educationId}) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        };
        const res = await axios.put(`users/user/educations/${educationId}`,formData,config);
        dispatch({
            type:EDIT_EDUCATION
        })
        dispatch(setAlert("Education has been edited","success"))
    }catch (e) {

    }
};
export const deleteEducation = ({educationId}) => async dispatch => {
    try {
        const res = await axios.delete(`users/user/educations/${educationId}`);
        dispatch({
            type:DELETE_EDUCATION,
            payload:educationId
        });
        dispatch(setAlert("Education has been deleted","success"))
    }catch (e) {

    }
};