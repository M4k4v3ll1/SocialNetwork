import {Dispatch} from "redux";
import {authApi, securityAPI} from "../components/api/Api";
import {stopSubmit} from "redux-form";

let initialState: InitialStateType = {
    data: {
        id: 0,
        email: '',
        login: '',
        isAuth: false,
        captchaUrl: ''
    },
    resultCode: 0,
    messages: []
}

export const setAuthUserData = (payload: DataType) => ({type: 'auth/SET-USER-DATA', payload} as const)
export const getCaptchaUrlSuccess = (payload: { captchaUrl: string }) => ({
    type: 'auth/GET-CAPTCHA-URL-SUCCESS',
    payload
} as const)

export const authReducer = (state: InitialStateType = initialState, action: authReducerActionTypes): InitialStateType => {
    switch (action.type) {
        case 'auth/SET-USER-DATA': {
            return {...state, data: {...action.payload}}
        }
        case 'auth/GET-CAPTCHA-URL-SUCCESS': {
            return {...state, data: {...state.data, captchaUrl: action.payload.captchaUrl}}
        }
        default: {
            return state
        }
    }
}

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const res = await authApi.me()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData({...res.data.data, isAuth: true}))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const res = await authApi.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
    }
    const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', {_error: message}))

}
export const logout = () => async (dispatch: Dispatch) => {
    const res = await authApi.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData({id: 0, email: '', login: '', isAuth: false, captchaUrl: ''}))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const res = await securityAPI.getCaptchaUrl()
    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlSuccess({captchaUrl}))
}

export type InitialStateType = {
    data: DataType
    resultCode: number
    messages: string[]
}

export type DataType = {
    id: number
    email: string
    login: string
    isAuth: boolean
    captchaUrl: string
}

export type authReducerActionTypes =
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof getCaptchaUrlSuccess>