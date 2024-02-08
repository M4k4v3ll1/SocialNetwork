import React, {FC} from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {StoreType} from "../../redux/store";


type ProfilePropsType = {
    store: StoreType
}

export const Profile: FC<ProfilePropsType> = (
    {
        store
    }
    ) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer
                store={store}
            />
        </div>
    );
};
