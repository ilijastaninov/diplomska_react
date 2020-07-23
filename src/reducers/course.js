import {
    COURSE_CREATED,
    DELETE_COURSE,
    EDIT_COURSE,
    GET_COURSE,
    GET_COURSES,
    LOGOUT
} from "../actions/types";

const initialState = {
    courses:[],
    current_course:null,
    isCourse:false,
    loading:true
}

export default function (state=initialState,action) {
    const {payload,type} = action;
    switch (type) {
        case LOGOUT:
            return {
                ...state,
                courses:[],
                current_course:null,
                isCourse:false
            };
        case COURSE_CREATED:
            return {
                ...state,
                isCourse:true
            };
        case GET_COURSE:
            return {
                ...state,
                current_course:payload,
                loading:false
            };
        case GET_COURSES:
            return {
                ...state,
                courses:payload,
                isCourse:true
            };
        case DELETE_COURSE:
            return {
                ...state,
                isCourse:true,
                courses:[...state.courses.filter(course => course.courseId !== payload)]
            };
        default:
            return state
    }
}