import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteExperience, getExperience} from "../../actions/experienceActions";
import {Link} from "react-router-dom";
import Spinner from "../layout/Spinner";

const ExperienceTable = () => {
    const isExperience = useSelector(state => state.experience.isExperience);
    const experiences = useSelector(state => state.experience.experiences);

    const dispatch = useDispatch();
    return (
        <Fragment>
            {isExperience === true && experiences !== null ? (

                <Fragment>

                    <h2 className={'my-2'}>Experience</h2>

                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Company</th>
                            <th>From</th>
                            <th>To</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            experiences.map(exp => {
                                return <tr key={exp.experienceId}>
                                    <td>{exp.title}</td>
                                    <td>{exp.company}</td>
                                    <td>{exp.from}</td>
                                    <td>{exp.to}</td>
                                    <td><button type={'button'} onClick={()=>{ dispatch(deleteExperience({experienceId:exp.experienceId}))}} className={'btn btn-danger'}>Delete experience</button></td>
                                    <td><Link type={'button'}  to={`/experience-${exp.experienceId}`}  className={'btn btn-light'}>Edit experience</Link></td>
                                </tr>
                            })
                        }

                        </tbody>
                    </table>
                </Fragment>

            ):(
                <Fragment>
                    {/*<Spinner/>*/}
                    <h3>There are no experiences added.Please add an experience.</h3>
                </Fragment>

            )}
        </Fragment>
    );
};

export default ExperienceTable;