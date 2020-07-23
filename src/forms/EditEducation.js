import React, {Fragment, useState,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editEducation, getEducation} from "../actions/educationActions";
import {Link} from "react-router-dom";

const EditEducation = (props) => {
    const educationId = props.match.params.educationId;
    const dispatch = useDispatch();
    const current_education = useSelector(state => state.education.current_education);
    const loading = useSelector(state => state.education.loading);
    useEffect( ()=>{
        console.log("USE EFFECT CALLED");
        console.log(current_education + " CURRENT EDUCATION IN USE EFFECT")
        dispatch(getEducation({educationId}))


        setFormData({
            degree:  loading   ? '' : current_education.degree,
            from:loading  ? '' : current_education.from,
            to: loading  ? '' : current_education.to
        })

    },[loading]);

    const [formData,setFormData] = useState({
        degree:'',
        from:'',
        to:''
    });


    const {degree,from,to} = formData;

    const onChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(editEducation(formData,{educationId:current_education.educationId}));
        setFormData({
            degree:'',
            from:'',
            to:''
        })
    };
    return (
        <Fragment>
            <h1 className="large text-primary">
                Edit An Education
            </h1>
            <small>* = required field</small>
            <form className="form" onSubmit={(e)=> onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="* degree" name="degree" value={degree} onChange={(e)=> onChange(e)} />
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" value={from} onChange={(e)=> onChange(e)}/>
                </div>
                <div className="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" value={to} onChange={(e)=> onChange(e)}/>
                </div>
                <input type="submit" className="btn btn-primary my-1"/>
                <Link className="btn btn-light my-1" to={"/dashboard"}>Go Back</Link>
            </form>
        </Fragment>
    );
};

export default EditEducation;