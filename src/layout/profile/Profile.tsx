import React, {FC} from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";
import {FormDataType} from "./ProfileInfo/ProfileDataForm";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: FormDataType) => Promise<{}>
}

export const Profile: FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto} saveProfile={saveProfile}/>
            <MyPostContainer/>
        </div>
    );
};
