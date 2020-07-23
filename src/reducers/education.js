import {DELETE_EDUCATION, EDUCATION_CREATED, GET_EDUCATION, GET_EDUCATIONS, LOGOUT} from "../actions/types";
const initialState = {
    educations:[],
    current_education:null,
    isEducation:false,
    loading:true
};

export default function (state=initialState,action) {
    const {payload,type} = action;
    switch (type) {
        case LOGOUT:
            return {
                ...state,
                educations:[],
                current_education:null,
                isEducation:false
            };
        case EDUCATION_CREATED:
            return {
                ...state,
                isEducation:true
            };
        case GET_EDUCATION:
            return {
                ...state,
                current_education:payload,
                loading:false
            };
        case GET_EDUCATIONS:
            return {
                ...state,
                educations:payload,
                isEducation:true
            };
        case DELETE_EDUCATION:
            return {
                ...state,
                isEducation:true,
                educations:[...state.educations.filter(education => education.educationId !== payload)]
            };
        default:
            return state
    }
}