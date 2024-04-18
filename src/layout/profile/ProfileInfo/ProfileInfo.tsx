import React, {ChangeEvent, FC, useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../components/common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import DEFAULT_PHOTO from '../../../components/assets/img/postLogo.png'
import {ProfileData} from "./ProfileData";
import {FormDataType, ProfileDataFormReduxForm} from "./ProfileDataForm";


type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: FormDataType) => Promise<{}>
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({
                                                          profile,
                                                          status,
                                                          updateStatus,
                                                          isOwner,
                                                          savePhoto,
                                                          saveProfile
                                                      }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    if (!profile) {
        return <Preloader/>
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: FormDataType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>
                <img className={s.img} src={profile.photos.large || DEFAULT_PHOTO} alt={'Profile logo'}/>
                {isOwner && <input type={'file'} onChange={onChangeHandler}/>}
                {editMode
                    ? <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    );
};