import React,{Fragment,useState} from 'react';
import {Link,Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../actions/authActions";

const Login = () => {
    const [formData,setFormData] = useState({
        username:'',
        password:''
    });
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.auth.isLogged);
    const onChange = (e) => {
        setFormData({
            ...formData, [e.target.name] : e.target.value
        })
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login({username,password}))
    };
    //REDIRECT IF LOGGED IN
    if(isLogged){
        return <Redirect to={"/dashboard"}/>
    }
    const {username,password} = formData;
    return (
        <Fragment>
            <h1 className="large text-primary">Log In</h1>
            <p className="lead"><i className="fas fa-user"></i> Log in to Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Username" name="username" value={username} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" name="password" value={password} onChange={onChange}/>
                </div>

                <input type="submit" className="btn btn-primary" value="Log in"/>
            </form>
            <p className="my-1">
                Don't have an account? <Link to={'/register'}>Register</Link>
            </p>
        </Fragment>
    );
};

export default Login;