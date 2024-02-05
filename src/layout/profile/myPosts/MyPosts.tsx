import React, {ChangeEvent, FC, useRef} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";
import {postsType} from "../../../redux/state";
import {ActionsTypes, addPostAC, UpdateNewPostTextAC} from "../../../redux/store";

type MyPostsPropsType = {
    posts: postsType[]
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const MyPosts: FC<MyPostsPropsType> = (
    {
        posts,
        dispatch,
        newPostText
    }
) => {

    const postElements = posts.map(p =>
        <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const onClickAddPostHandler = () => {
        dispatch(addPostAC())
    }
    const onChangePostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(UpdateNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlocks}>
            <h3>
                My posts
            </h3>
            <div>
                <textarea
                    onChange={onChangePostChangeHandler}
                    ref={newPostElement}
                    value={newPostText}
                />
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
