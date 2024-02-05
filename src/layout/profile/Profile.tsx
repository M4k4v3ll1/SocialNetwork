import React, {FC} from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../redux/state";
import {ActionsTypes} from "../../redux/store";

type ProfilePropsType = {
    posts: postsType[],
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const Profile: FC<ProfilePropsType> = (
    {
        posts,
        dispatch,
        newPostText
    }
    ) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                posts={posts}
                dispatch={dispatch}
                newPostText={newPostText}
            />
        </div>
    );
};
