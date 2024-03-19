import {Dispatch} from "redux";
import {authApi} from "../components/api/Api";

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

export const setAuthUserData = (data: DataType) => ({type: 'SET-USER-DATA', data} as const)


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

export const authReducer = (state: InitialStateType = initialState, action: authReducerActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, data: {...action.data, isAuth: true}}
        }
        default: {
            return state
        }
    }
}

export const setUser = () => (dispatch: Dispatch) => {
    authApi.setUserData()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(res.data.data))
            }
        })
}