import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addCourseToUser, deleteCourse} from "../../actions/courseActions";

const CourseTable = () => {
    const isCourse = useSelector(state => state.course.isCourse);
    const courses = useSelector(state => state.course.courses);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    return (
        <Fragment>
            {isCourse === true && courses !== null && user !== null ? (

                <Fragment>

                    <h2 className={'my-2'}>Courses</h2>

                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>Course name</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            courses.map(c => {
                                return <tr key={c.courseId}>
                                    <td>{c.courseName}</td>
                                    <td><button type={'button'} onClick={()=>{ dispatch(deleteCourse({courseId:c.courseId}))}} className={'btn btn-danger'}>Delete course</button></td>
                                    <td><Link type={'button'}  to={`/course-${c.courseId}`}  className={'btn btn-light'}>Edit course</Link></td>
                                    <td><button type={'button'}  onClick={()=>dispatch(addCourseToUser({userId:user.id},{courseId:c.courseId}))}  className={'btn btn-primary'}>Add course to user</button></td>
                                    <td><Link type={'button'}  to={`/view-${c.courseId}`}  className={'btn btn-light'}>View course</Link></td>
                                </tr>
                            })
                        }

                        </tbody>
                    </table>
                </Fragment>

            ):(
                <Fragment>
                    {/*<Spinner/>*/}
                    <h3>There are no courses added.Please add a course.</h3>
                </Fragment>

            )}
        </Fragment>
    );
};

export default CourseTable;