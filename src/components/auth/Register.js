import React,{Fragment,useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setAlert} from "../../actions/alertActions";
import {register} from "../../actions/authActions";

const Register = () => {
    const [formData,setFormData] = useState({
        username:'',
        password:'',
        firstName:"",
        lastName:"",
        email:"",
        status:"",
        bio:""
    });
    const {username,password,firstName,lastName,email,status,bio} = formData;
    const dispatch = useDispatch();
    const onChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(register({username,password,firstName,lastName,email,status,bio}))
    };
    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Username" name="username" value={username} onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" name="password" value={password} onChange={onChange}/>

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={firstName}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Lastname"
                        name="lastName"
                        value={lastName}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <select name="status" value={status} onChange={(e)=> onChange(e)}>
                        <option value="0">* Select Professional Status</option>
                        <option value="Developer">Developer</option>
                        <option value="Junior Developer">Junior Developer</option>
                        <option value="Senior Developer">Senior Developer</option>
                        <option value="Manager">Manager</option>
                        <option value="Student or Learning">Student or Learning</option>
                        <option value="Instructor">Instructor or Teacher</option>
                        <option value="Intern">Intern</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={(e)=> onChange(e)}></textarea>
                    <small className="form-text">Tell us a little about yourself</small>
                </div>

                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
            <p className="my-1">
                Already have an account? <Link to={'/login'}>Log In</Link>
            </p>
        </Fragment>
    );
};

export default Register;