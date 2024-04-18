import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../../components/common/formsControls/FormsControls";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import s from "./ProfileInfo.module.css";

const ProfileDataForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    const profile = useSelector((state: AppStateType) => state.profilePage.profile)
    return (
        <form onSubmit={handleSubmit}>
            <button>Save</button>
            {error && <div className={s.formControlSummaryError}>{error}</div>}
            <div>
                <b>Fullname:</b>
                <Field placeholder={'Full name'} name={'fullName'} component={FormControl} type={'input'}
                       validate={[]}/>
            </div>
            <div>
                <b>Looking for a job:</b>
                <Field name={'lookingForAJob'} component={'input'} type={'checkbox'}
                />
            </div>
            {
                <div>
                    <b>My professional skills:</b>
                    <Field placeholder={'My professional skills'} name={'lookingForAJobDescription'}
                           component={FormControl} type={'textarea'}
                           validate={[]}/>
                </div>
            }
            <div>
                <b>About me:</b> <Field placeholder={'About me'} name={'aboutMe'} component={FormControl}
                                        type={'textarea'}
                                        validate={[]}/>
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div className={s.contact} key={key}>
                    <b>
                        {key}: <Field placeholder={key} name={'contacts.' + key} component={FormControl}
                                      type={'input'}
                                     validate={[]}/>
                    </b>
                </div>
            })}
            </div>
        </form>
    )
}
export type FormDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}
export const ProfileDataFormReduxForm = reduxForm<FormDataType>({
    form: 'edit-profile'
})(ProfileDataForm)