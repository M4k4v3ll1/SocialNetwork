import React, {FC} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../components/common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import DEFAULT_PHOTO from '../../../components/assets/img/postLogo.png'

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>
                <img className={s.img} src={profile.photos.large || DEFAULT_PHOTO} alt={'Profile logo'}/>
                Ava+description
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    );
};
