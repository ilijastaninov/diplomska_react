import {
    EDUCATION_CREATED,
    GET_EDUCATIONS,
    GET_EDUCATION,
    DELETE_EDUCATION,
    EDIT_EDUCATION,
    LOGIN_FAILED,
    COURSE_CREATED,
    GET_COURSE,
    GET_COURSES,
    EDIT_COURSE,
    DELETE_COURSE,
    ADD_COURSE_TO_USER,
    LIST_USERS_FOR_COURSE, LOAD_COURSES_FOR_USER
} from "./types";
import {setAlert} from "./alertActions";
import axios from 'axios'
export const createCourse = (formData) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        };
        const res = await axios.post(`/courses`,formData,config);
        dispatch({
            type:COURSE_CREATED
        });
        dispatch(setAlert("Course created",'success'));
    }catch (e) {
        const errors = e.response.data.errors;

        if(errors){
            Object.keys(errors).forEach(err => dispatch(setAlert(errors[err],'danger')));
        }
    }
};
export const getCourse = ({courseId}) => async dispatch => {
    try {
        const res = await axios.get(`/courses/${courseId}`);
        dispatch({
            type:GET_COURSE,
            payload:res.data
        })
    }catch (e) {

    }
};
export const getCourses = () => async dispatch => {
    try {
        const res = await axios.get(`/courses`);
        dispatch({
            type:GET_COURSES,
            payload:res.data
        })
    }catch (e) {

    }
};
export const editCourse = (formData,{courseId}) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        };
        const res = await axios.put(`/courses/${courseId}`,formData,config);
        dispatch({
            type:EDIT_COURSE
        })
        dispatch(setAlert("Course has been edited","success"))
    }catch (e) {

    }
};
export const deleteCourse = ({courseId}) => async dispatch => {
    try {
        const res = await axios.delete(`/courses/${courseId}`);
        dispatch({
            type:DELETE_COURSE,
            payload:courseId
        });
        dispatch(setAlert("Course has been deleted","success"))
    }catch (e) {

    }
};
export const addCourseToUser = ({userId},{courseId}) => async dispatch => {
    try {
        const res = await axios.post(`/usercourse`,{userId,courseId});
        dispatch({
            type:ADD_COURSE_TO_USER
        });
        dispatch(setAlert("Course has been added to user.","success"))
    }catch (e) {
        const errors = e.response.data.errors;

        if(errors){
            Object.keys(errors).forEach(err => dispatch(setAlert(errors[err],'danger')));
        }
    }
};
export const listUsersForCourse = ({courseId}) => async dispatch => {
    try {
        const res = await axios.get(`/usercourse/${courseId}/users`);
        dispatch({
            type:LIST_USERS_FOR_COURSE,
            payload:res.data
        });
    }catch (e) {
        const errors = e.response.data.errors;

        if(errors){
            Object.keys(errors).forEach(err => dispatch(setAlert(errors[err],'danger')));
        }
    }
};
export const listCoursesForUser = () => async dispatch => {
    try {
        const res = await axios.get(`/usercourse/user/courses`);
        dispatch({
            type:LOAD_COURSES_FOR_USER,
            payload:res.data
        });
    }catch (e) {
        const errors = e.response.data.errors;

        if(errors){
            Object.keys(errors).forEach(err => dispatch(setAlert(errors[err],'danger')));
        }
    }
}