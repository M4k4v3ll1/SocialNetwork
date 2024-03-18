import React, {ChangeEvent, FC} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";
import {postsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: postsType[]
    newPostText: string
    callbackOnChangePost: (newPostText: string) => void
    callbackOnClickAddPost: () => void
}

export const MyPosts: FC<MyPostsPropsType> = (
    {
        posts,
        newPostText,
        callbackOnChangePost,
        callbackOnClickAddPost
    }
) => {
    const postElements = posts.map(p =>
        <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onClickAddPostHandler = () => {
        callbackOnClickAddPost()
    }
    const onChangePostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        callbackOnChangePost(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlocks}>
            <h3>
                My posts
            </h3>
            <div>
                <textarea
                    onChange={onChangePostChangeHandler}
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
