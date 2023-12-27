import React, {ChangeEvent, FC, useRef} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";
import {postsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: postsType[]
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

export const MyPosts: FC<MyPostsPropsType> = (
    {
        posts,
        addPost,
        updateNewPostText,
        newPostText
    }
) => {

    const postElements = posts.map(p =>
        <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const onClickAddPostHandler = () => {
        addPost()
    }
    const onChangePostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
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
