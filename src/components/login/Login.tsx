import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from '../common/formsControls/FormsControls.module.css'

const Login = (props: MapStateToProps & MapDispatchToProps) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    );
};
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.data.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)

type MapStateToProps = {
    isAuth: boolean
}
type MapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.data.captchaUrl)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={FormControl} type={'input'}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={FormControl} type={'input'}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
            </div>
            {captchaUrl && <img src={captchaUrl} alt={'Insert CAPTCHA symbols'}/>}
            {captchaUrl && <Field placeholder={'Captcha symbols'} name={'captcha'} component={FormControl} type={'input'}
                                  validate={[required]}/>}
            {error && <div className={s.formControlSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

