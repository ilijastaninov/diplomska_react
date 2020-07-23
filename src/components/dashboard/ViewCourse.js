import React,{Fragment,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCourse, listUsersForCourse} from "../../actions/courseActions";

const ViewCourse = (props) => {
    const courseId = props.match.params.courseId;
    const users = useSelector(state => state.usercourse.users);
    const current_course = useSelector(state => state.course.current_course);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCourse({courseId:courseId}))
        dispatch(listUsersForCourse({courseId:courseId}))
    },[]);
    return (
        <Fragment>
            {
                users !== null && current_course !== null ? (
                    <Fragment>
                        <h3>User enrolled for the course {current_course.courseName}</h3>
                        {
                            users.map(user =>{
                                return <ul className={"list-group"}>
                                    <li className={"list-group-item list-group-item-info"} key={user.userId}>{user.user.firstName} {user.user.lastName}</li>
                                </ul>
                            })
                        }
                    </Fragment>
                ):
                    <Fragment>
                        <h3>There are no users enrolled for this course</h3>
                    </Fragment>

            }
        </Fragment>
    );
};

export default ViewCourse;