import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import {createPost} from "../../actions/postActions";

const PostForm = () => {
    const [text,setText]= useState('');
    const dispatch = useDispatch();
    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Say Something...</h3>
            </div>
            <form className="form my-1" onSubmit={e=>{
                e.preventDefault()
                dispatch(createPost({text}));
                setText('');
            }}>
                  <textarea
                      name="text"
                      cols="30"
                      rows="5"
                      value={text}
                      onChange={e => setText(e.target.value)}
                      placeholder="Create a post"
                      required
                  ></textarea>
                <input type="submit" className="btn btn-dark my-1" value="Submit"/>
            </form>
        </div>
    );
};

export default PostForm;