import {Dispatch} from "redux";
import {authApi} from "../components/api/Api";
import {stopSubmit} from "redux-form";

let initialState: InitialStateType = {
    data: {
        id: 0,
        email: '',
        login: '',
        isAuth: false
    },
    resultCode: 0,
    messages: []
}

export const setAuthUserData = (payload: DataType) => ({type: 'SET-USER-DATA', payload} as const)

export const authReducer = (state: InitialStateType = initialState, action: authReducerActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, data: {...action.payload}}
        }
        default: {
            return state
        }
    }
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authApi.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData({...res.data.data, isAuth: true}))
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authApi.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                if (res.data.messages.length > 0) {
                    dispatch(stopSubmit('login', {_error: res.data.messages[0]}))
                }
            }
        })
}
export const logout = () => (dispatch: Dispatch) => {
    authApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData({id: 0, email: '', login: '', isAuth: false}))
            }
        })
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
}

export type authReducerActionTypes = ReturnType<typeof setAuthUserData>