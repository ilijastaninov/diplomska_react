import React,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import "./App.css"
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
//Redux
import {Provider} from 'react-redux';
import store from './store';
import Alert from "./components/layout/Alert";
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./actions/authActions";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import AddEducation from "./forms/AddEducation";
import AddExperience from "./forms/AddExperience";
import EditEducation from "./forms/EditEducation";
import EditExperience from "./forms/EditExperience";
import AddCourse from "./forms/AddCourse";
import EditCourse from "./forms/EditCourse";
import ViewCourse from "./components/dashboard/ViewCourse";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";


if(localStorage.token){
    let bearerToken = "Bearer ";
    let res = bearerToken.concat(localStorage.token);
    setAuthToken(res);
}
const App = () => {
    useEffect(()=>{
        store.dispatch(loadUser());
    },[]);
      return (

          <Provider store={store}>
                <Router>
                      <Fragment>
                            <Navbar/>
                            <Route exact path={"/"} component={Landing}/>
                            <section className={"container"}>
                                <Alert/>
                                  <Switch>
                                        <Route exact path={"/register"} component={Register}/>
                                        <Route exact path={"/login"} component={Login}/>
                                        <PrivateRoute exact path={"/dashboard"} component={Dashboard}/>
                                      <PrivateRoute exact path={"/add-education"} component={AddEducation}/>
                                      <PrivateRoute exact path={"/add-experience"} component={AddExperience}/>
                                      <PrivateRoute exact path={'/add-course'} component={AddCourse}/>
                                      <PrivateRoute exact path={'/education-:educationId'} component={EditEducation}/>
                                      <PrivateRoute exact path={'/experience-:experienceId'} component={EditExperience}/>
                                      <PrivateRoute exact path={'/course-:courseId'} component={EditCourse}/>
                                      <PrivateRoute exact path={'/view-:courseId'} component={ViewCourse}/>
                                      <PrivateRoute exact path={'/profile-:userId'} component={Profile}/>
                                      <PrivateRoute exact path={'/posts'} component={Posts}/>
                                  </Switch>
                            </section>
                      </Fragment>
                </Router>
          </Provider>
      );
};

export default App;
