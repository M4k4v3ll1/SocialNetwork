import {getAuthUserData} from "./auth-reducer";

let initialState = {
    initialized: false
}

type InitialState = typeof initialState
export const initializedSuccess = () => ({type: 'SET-INITIALIZED-SUCCESSES'} as const)

export const appReducer = (state: InitialState = initialState, action: appReducerActionTypes): InitialState => {
    switch (action.type) {
        case 'SET-INITIALIZED-SUCCESSES': {
            return {...state, initialized: true}
        }
        default: {
            return state
        }
    }
}

export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(initializedSuccess())
        })
}
export type appReducerActionTypes = ReturnType<typeof initializedSuccess>