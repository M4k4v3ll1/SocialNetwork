import React, {FC} from 'react';
import s from './ProfileInfo.module.css';
import BG from '../../../components/assets/img/beach.webp';
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../components/common/preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <img src={BG} alt={'Background picture: Beach'}/>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt={'Profile logo'}/>
                Ava+description
            </div>
        </div>
    );
};
