import axios from "axios";
import {GET_EXPERIENCES,GET_EXPERIENCE,DELETE_EXPERIENCE,EDIT_EXPERIENCE,EXPERIENCE_CREATED} from "./types";
import {setAlert} from "./alertActions";

export const createExperience = (formData) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        };
        const res = await axios.post(`users/user/experiences`,formData,config);
        dispatch({
            type:EXPERIENCE_CREATED
        });
        dispatch(setAlert("Experience created",'success'));
    }catch (e) {
        const errors = e.response.data.errors;

        if(errors){
            Object.keys(errors).forEach(err => dispatch(setAlert(errors[err],'danger')));
        }
    }
};
export const getExperience = ({experienceId}) => async dispatch => {
    try {
        const res = await axios.get(`users/user/experiences/${experienceId}`);
        dispatch({
            type:GET_EXPERIENCE,
            payload:res.data
        })
    }catch (e) {

    }
};
export const getExperiences = () => async dispatch => {
    try {
        const res = await axios.get(`users/user/experiences`);
        dispatch({
            type:GET_EXPERIENCES,
            payload:res.data
        })
    }catch (e) {

    }
};
export const editExperience = (formData,{experienceId}) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        };
        const res = await axios.put(`users/user/experiences/${experienceId}`,formData,config);
        dispatch({
            type:EDIT_EXPERIENCE
        })
        dispatch(setAlert("Experience has been edited.","success"))
    }catch (e) {

    }
};
export const deleteExperience = ({experienceId}) => async dispatch => {
    try {
        const res = await axios.delete(`users/user/experiences/${experienceId}`);
        dispatch({
            type:DELETE_EXPERIENCE,
            payload:experienceId
        });
        dispatch(setAlert("Experience has been deleted","success"))
    }catch (e) {

    }
};