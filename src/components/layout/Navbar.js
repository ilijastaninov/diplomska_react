import React,{Fragment} from 'react';
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {logout} from "../../actions/authActions";
import Spinner from "./Spinner";

const Navbar = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.auth.loading);
    const user = useSelector(state=> state.auth.user);
    const isLogged = useSelector(state=> state.auth.isLogged);
    const authLinks = (
        <ul>
            <li><Link to={"/dashboard"}>Dashboard</Link></li>
            <li><Link to={"/posts"}>Posts</Link></li>
            {user !== null ? <li><Link to={`/profile-${user.id}`}>{user.name}</Link></li> : <Fragment><Spinner/></Fragment>}
            <li><Link to={'/'} onClick={()=>dispatch(logout())}>
                <i className={'fas fa-sign-out-alt'}></i>{' '}
                <span className={'hide-sm'}>Logout</span></Link>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li><Link to={"/register"}>Register</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
        </ul>
    );
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to={"/"}><i className="fas fa-code"></i> Connector</Link>
            </h1>
            {!loading &&
            (<Fragment>
                {isLogged ? authLinks : guestLinks}
            </Fragment>)}
        </nav>
    );
};

export default Navbar;