import React, {FC} from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType
}

export const Profile: FC<ProfilePropsType> = ({profile}) => {
    debugger
    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile}/>
            <MyPostContainer/>
        </div>
    );
};
