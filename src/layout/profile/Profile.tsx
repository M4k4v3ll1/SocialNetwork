import React, {FC} from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../redux/state";

type ProfilePropsType = {
    posts: postsType[]
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

export const Profile: FC<ProfilePropsType> = (
    {
        posts,
        addPost,
        updateNewPostText,
        newPostText
    }
    ) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                posts={posts}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                newPostText={newPostText}/>
        </div>
    );
};
