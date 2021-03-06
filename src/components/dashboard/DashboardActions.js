import React from 'react';
import {Link} from "react-router-dom";

const DashboardActions = () => {
    return (
        <div className="dash-buttons">
            <Link to={"/add-experience"} className="btn btn-light"
            ><i className="fab fa-black-tie text-primary"></i> Add Experience</Link
            >
            <Link to={"/add-education"} className="btn btn-light"
            ><i className="fas fa-graduation-cap text-primary"></i> Add Education</Link
            >
            <Link to={"/add-course"} className="btn btn-light"
            ><i className="fas fa-graduation-cap text-primary"></i> Add Course</Link
            >
        </div>
    );
};

export default DashboardActions;