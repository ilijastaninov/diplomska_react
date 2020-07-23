import React,{Fragment,useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../../actions/postActions";
import Spinner from "../layout/Spinner";
import PostItem from './PostItem'
import PostForm from "./PostForm";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const user = useSelector(state =>state.auth.user);
    useEffect(()=>{
        dispatch(loadPosts())
    },[]);
    return (
        <Fragment>
            <h1 className="large text-primary">
                Posts
            </h1>
            <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>

            <PostForm/>

            <div className="posts">
                {user !== null && posts !== null ? posts.map(post =>{
                   return <PostItem key={post.postId} post={post} user={user}/>
                })
                    :<Spinner/>
                }

            </div>
        </Fragment>
    );
};

export default Posts;