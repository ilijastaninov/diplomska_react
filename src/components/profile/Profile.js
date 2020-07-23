import React,{Fragment,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import Spinner from "../layout/Spinner";
import {getExperiences} from "../../actions/experienceActions";
import {getEducations} from "../../actions/educationActions";
import {listCoursesForUser} from "../../actions/courseActions";

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state=>state.auth.user);
    const experiences = useSelector(state=>state.experience.experiences);
    const educations = useSelector(state=>state.education.educations);
    const coursesForUser = useSelector(state=>state.usercourse.courses);
    useEffect(()=>{
        dispatch(getExperiences());
        dispatch(getEducations());
        dispatch(listCoursesForUser())
    },[]);
    return (
        <Fragment>
            {user !== null && experiences !== null && educations !== null ? <Fragment>
                <div className="profile-grid my-1">
                    <div className="profile-top bg-primary p-2">
                        <h1 className="large">{user.name}</h1>
                        <p className="lead">{user.status}</p>
                    </div>
                </div>
                <div className="profile-about bg-light p-2">
                    <h2 className="text-primary">{user.name} Bio</h2>
                    <p>
                        {user.bio}
                    </p>
                    <div className="line"></div>
                </div>
                <div className="profile-exp bg-white p-2">
                    <h2 className="text-primary">Experience</h2>
                    {experiences.map(exp => {
                        return <div key={exp.experienceId}>
                                <h3 className="text-dark">{exp.company}</h3>
                                <p>{exp.from} - {exp.to}</p>
                                <p><strong>Position: </strong>{exp.title}</p>
                                <p>
                                    <strong>Description: </strong>Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                                    ipsam, sapiente suscipit dicta eius velit amet aspernatur
                                    asperiores modi quidem expedita fugit.
                                </p>
                            </div>
                    })}
                </div>
                <div className="profile-edu bg-white p-2">
                    <h2 className="text-primary">Education</h2>
                    {educations.map(edu =>{
                        return <div key={edu.educationId}>
                                <h3>{edu.degree}</h3>
                                <p>{edu.from} - {edu.to}</p>
                                <p><strong>Degree: </strong>{edu.degree}</p>
                                <p>
                                    <strong>Description: </strong>Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                                    ipsam, sapiente suscipit dicta eius velit amet aspernatur
                                    asperiores modi quidem expedita fugit.
                                </p>
                            </div>
                    })}
                </div>
                <div className="profile-edu bg-white p-2">
                    <h2 className="text-primary">Courses enrolled by user</h2>
                    {coursesForUser.map(course =>{
                        return <div key={course.course.courseId}>
                            <h3>{course.course.courseName}</h3>

                            <p>
                                <strong>Description: </strong>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                                ipsam, sapiente suscipit dicta eius velit amet aspernatur
                                asperiores modi quidem expedita fugit.
                            </p>
                        </div>
                    })}
                </div>
            </Fragment>: <Spinner/>}
        </Fragment>
    );
};

export default Profile;