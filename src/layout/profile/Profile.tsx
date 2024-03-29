import React, {FC} from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const Profile: FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostContainer/>
        </div>
    );
};
