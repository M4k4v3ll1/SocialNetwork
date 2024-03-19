import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

export type AppStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store