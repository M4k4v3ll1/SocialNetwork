import React, {FC} from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../redux/state";

type ProfilePropsType = {
    posts: postsType[]
}

export const Profile: FC<ProfilePropsType> = (
    {
        posts
    }
    ) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};
