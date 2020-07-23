import React,{Fragment} from 'react';
import {Link} from "react-router-dom";
import Spinner from "../layout/Spinner";

const PostItem = ({post:{postId,text,user,userId},user:{id}}) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile-${userId}`}>
                    {user!== null ? <h4>{user.firstName} {user.lastName}</h4> : <Spinner/>}
                </Link>
            </div>
            <div key={postId}>
                <p className="my-1" >
                    {text}
                </p>
            </div>
        </div>
    );
};

export default PostItem;