import React, {FC} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../components/common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {
    console.log(profile)
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt={'Profile logo'}/>
                Ava+description
                <ProfileStatus
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    );
};
