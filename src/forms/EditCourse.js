import React, {Fragment, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editCourse, getCourse} from "../actions/courseActions";

const EditCourse = (props) => {
    const courseId = props.match.params.courseId;
    const current_course = useSelector(state => state.course.current_course);
    const loading = useSelector(state => state.course.loading);
    useEffect( ()=>{
        console.log("USE EFFECT CALLED");
        console.log(current_course + " CURRENT EDUCATION IN USE EFFECT")
        dispatch(getCourse({courseId}));


        setFormData({
            courseName:  loading   ? '' : current_course.courseName,
        })

    },[loading]);
    const [formData,setFormData] = useState({
        courseName:'',
    });
    const {courseName} = formData;
    const dispatch = useDispatch();
    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(editCourse(formData,{courseId:current_course.courseId}))
    };
    return (
        <Fragment>
            <h1 className="large text-primary">
                Edit A Course
            </h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Edit course
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(e)=> onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="* Course name" name="courseName" value={courseName} onChange={(e)=> onChange(e)} />
                </div>

                <input type="submit" className="btn btn-primary my-1"/>
                <Link className="btn btn-light my-1" to={"/dashboard"}>Go Back</Link>
            </form>
        </Fragment>
    );
};

export default EditCourse;