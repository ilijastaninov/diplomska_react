import {GET_EXPERIENCES,GET_EXPERIENCE,DELETE_EXPERIENCE,EDIT_EXPERIENCE,EXPERIENCE_CREATED,LOGOUT} from "../actions/types";

const initialState = {
    experiences:[],
    current_experience:null,
    isExperience:false,
    loading:true
};

export default function (state=initialState,action) {
    const {payload,type} = action;
    switch (type) {
        case LOGOUT:
            return {
                ...state,
                experiences:[],
                current_experience:null,
                isExperience:false
            };
        case EXPERIENCE_CREATED:
            return {
                ...state,
                isExperience:true
            };
        case GET_EXPERIENCE:
            return {
                ...state,
                current_experience:payload,
                loading:false
            };
        case GET_EXPERIENCES:
            return {
                ...state,
                experiences:payload,
                isExperience:true
            };
        case DELETE_EXPERIENCE:
            return {
                ...state,
                isExperience:true,
                experiences:[...state.experiences.filter(experience => experience.experienceId !== payload)]
            };
        default:
            return state
    }
}