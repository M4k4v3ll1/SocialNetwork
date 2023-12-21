import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlocks}>
            <h3>
                My posts
            </h3>
            <div>
                <textarea/>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                <Post
                    message='Hi, how are you?'
                    likesCount={5}
                />
                <Post
                    message={`It's my first post!`}
                    likesCount={10}
                />
            </div>
        </div>
    )
        ;
};
