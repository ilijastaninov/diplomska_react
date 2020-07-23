import {LIST_USERS_FOR_COURSE, LOAD_COURSES_FOR_USER} from "../actions/types";

const initialState = {
    users:[],
    loading:true,
    courses:[]
};

export default function (state=initialState,action) {
    const {payload,type} = action;
    switch (type) {
        case LIST_USERS_FOR_COURSE:
            return{
                ...state,
                users:payload
            };
        case LOAD_COURSES_FOR_USER:
            return{
                ...state,
                courses:payload,
                loading:false
            };
        default:
                return state
    }
}