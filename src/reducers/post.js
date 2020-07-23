import {CREATE_POST, LOAD_POSTS, LOGOUT} from "../actions/types";

const initialState = {
    posts:[],
    loading:true
};

export default function (state=initialState,action) {
    const {payload,type} = action;
    switch (type) {
        case LOAD_POSTS:
            return{
                ...state,
                posts:payload
            }
        case CREATE_POST:
            return {
                ...state,
                posts:[payload,...state.posts]
            };
        case LOGOUT:
            return {
                ...state,
                posts:[]
            }
        default:
            return state;
    }
}