import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormsControls.module.css'

const Login = (props: MapStateToProps & MapDispatchToProps) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
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
    login: (email: string, password: string, rememberMe: boolean) => void
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
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
            {props.error && <div className={s.formControlSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

