import React, {FC, useRef} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";
import {postsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: postsType[]
}

export const MyPosts: FC<MyPostsPropsType> = (
    {
        posts
    }
    ) => {

    let postElements = posts.map(p =>
        <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const onClickAddPostHandler = () => {
        if (newPostElement.current !== null) {
            alert(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlocks}>
            <h3>
                My posts
            </h3>
            <div>
                <textarea ref={newPostElement}/>
            </div>
            <div>
                <button onClick={onClickAddPostHandler}>Add post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
};
