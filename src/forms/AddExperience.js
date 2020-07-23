import React,{useState,Fragment} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createEducation} from "../actions/educationActions";
import {createExperience} from "../actions/experienceActions";

const AddExperience = () => {

    const [formData,setFormData] = useState({
        title:'',
        company:'',
        from:'',
        to:''
    });
    const {title,company,from,to} = formData;
    const dispatch = useDispatch();
    const onChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createExperience(formData));
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
                Add An Experience
            </h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add experiences that you have had in the past
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(e)=> onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="* Enter title" name="title" value={title} onChange={(e)=> onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Enter company name" name="company" value={company} onChange={(e)=> onChange(e)} />
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

export default AddExperience;