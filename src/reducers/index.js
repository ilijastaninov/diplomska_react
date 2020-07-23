import {combineReducers} from 'redux';
import alert from './alert'
import auth from './auth'
import education from './education'
import experience from './experience'
import course from './course'
import post from './post'
import usercourse from './usercourse'
export default combineReducers({
    alert,
    auth,
    education,
    experience,
    course,
    post,
    usercourse
});