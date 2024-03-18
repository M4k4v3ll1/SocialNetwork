export type InitialStateType = {
    data: DataType
    resultCode: number
    messages: string[]
    isAuth: boolean
}

export type DataType = {
    id: number
    email: string
    login: string
}

export type authReducerActionTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: DataType) => ({type: 'SET-USER-DATA', data} as const)


let initialState: InitialStateType = {
    data: {
        id: 0,
        email: '',
        login: ''
    },
    resultCode: 0,
    messages: [],
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: authReducerActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            debugger
            return {...state, ...action.data, isAuth: true}
        }
        default: {
            return state
        }
    }
}