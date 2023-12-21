import React from 'react';
import s from './ProfileInfo.module.css';
import BG from '../../../components/assets/img/beach.webp';


export const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <img src={BG} alt={'Background picture: Beach'}/>
            <div className={s.descriptionBlock}>
                Ava+description
            </div>
        </div>
    );
};
