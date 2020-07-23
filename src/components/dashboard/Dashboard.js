import React,{Fragment,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import {getEducations} from "../../actions/educationActions";
import {getExperiences} from "../../actions/experienceActions";
import EducationTable from "./EducationTable";
import ExperienceTable from "./ExperienceTable";
import CourseTable from "./CourseTable";
import {getCourses} from "../../actions/courseActions";

const Dashboard = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getEducations());
        dispatch(getExperiences());
        dispatch(getCourses());
    },[]);
    return (
        <Fragment>

            <h1 className={'large text-primary'}>Dashboard</h1>
            <p className={'lead'}>
                {user !== null ? (
                        <Fragment> <i className={'fas fa-user'}></i>{' '}
                            <Fragment>Welcome {user.name}</Fragment>
                        </Fragment>
                    )

                    :
                    (<Fragment><Spinner/></Fragment>)
                }
            </p>
            <DashboardActions/>
            <EducationTable/>
            <ExperienceTable/>
            <CourseTable/>
        </Fragment>
    );
};

export default Dashboard;