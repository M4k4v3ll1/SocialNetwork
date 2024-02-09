import React, {FC} from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./myPosts/MyPostsContainer";

type ProfilePropsType = {

}

export const Profile: FC<ProfilePropsType> = (
    {

    }
    ) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostContainer

            />
        </div>
    );
};
