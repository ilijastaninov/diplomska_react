import React, {Fragment, useState,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editEducation} from "../actions/educationActions";
import {Link} from "react-router-dom";
import {editExperience, getExperience} from "../actions/experienceActions";

const EditExperience = (props) => {
    const experienceId = props.match.params.experienceId;
    const dispatch = useDispatch();
    const current_experience = useSelector(state => state.experience.current_experience);
    const loading = useSelector(state => state.experience.loading);
    useEffect( ()=>{
        console.log("USE EFFECT CALLED");
        console.log(current_experience + " CURRENT EDUCATION IN USE EFFECT")
        dispatch(getExperience({experienceId}));


        setFormData({
            title:  loading   ? '' : current_experience.title,
            company:  loading   ? '' : current_experience.company,
            from:loading  ? '' : current_experience.from,
            to: loading  ? '' : current_experience.to
        })

    },[loading]);

    const [formData,setFormData] = useState({
        title:'',
        company:'',
        from:'',
        to:''
    });


    const {title,company,from,to} = formData;

    const onChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(editExperience(formData,{experienceId:current_experience.experienceId}));
        setFormData({
            title:'',
            company:'',
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
                    <input type="text" placeholder="* degree" name="title" value={title} onChange={(e)=> onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* company" name="company" value={company} onChange={(e)=> onChange(e)} />
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

export default EditExperience;