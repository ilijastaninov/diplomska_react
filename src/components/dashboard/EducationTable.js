import React,{Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {deleteEducation, getEducation} from "../../actions/educationActions";
import Spinner from "../layout/Spinner";


const EducationTable = () => {
    const isEducation = useSelector(state => state.education.isEducation);
    const educations = useSelector(state => state.education.educations);
    const dispatch = useDispatch();
    return (
        <Fragment>
            {isEducation === true && educations !== null ? (

                <Fragment>

                    <h2 className={'my-2'}>Educations</h2>

                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>Degree</th>
                            <th>From</th>
                            <th>To</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            educations.map(edu => {
                                return <tr key={edu.educationId}>
                                    <td>{edu.degree}</td>
                                    <td>{edu.from}</td>
                                    <td>{edu.to}</td>
                                    <td><button type={'button'} onClick={()=>{dispatch(deleteEducation({educationId:edu.educationId}))}} className={'btn btn-danger'}>Delete education</button></td>
                                    <td><Link type={'button'}  to={`/education-${edu.educationId}`}  className={'btn btn-light'}>Edit education</Link></td>
                                </tr>
                            })
                        }
                            {/*onClick={()=>dispatch(getEducation({educationId:edu.educationId}))}*/}
                        </tbody>
                    </table>
                </Fragment>

            ):(
                <Fragment>
                    {/*<Spinner/>*/}
                    <h3>There are no educations, please add an education.</h3>
                </Fragment>

            )}
        </Fragment>
    );
};

export default EducationTable;