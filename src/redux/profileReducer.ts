import {PostsType, ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../components/api/Api";
import {FormDataType} from "../layout/profile/ProfileInfo/ProfileDataForm";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {message} from "antd";
import {promisify} from "node:util";

export type ProfileType = {
    userId: number
    aboutMe: string
    fullName: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string
        large: string
    }
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post!', likesCount: 10}
    ],
    profile: {
        userId: 30705,
        aboutMe: '',
        fullName: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}

export type ProfileReducerActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setUserStatus> |
    ReturnType<typeof deletePostAC> |
    ReturnType<typeof savePhotoSuccess>

export const addPostAC = (newPostText: string) => ({type: 'profile/ADD-POST', newPostText} as const)
export const deletePostAC = (id: number) => ({type: 'profile/DELETE-POST', id} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'profile/SET-USER-PROFILE', profile} as const)
export const setUserStatus = (status: string) => ({type: 'profile/SET-USER-STATUS', status} as const)
export const savePhotoSuccess = (photos: {small: string, large: string}) => ({type: 'profile/SAVE-PHOTO-SUCCESS', photos} as const)

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'profile/ADD-POST': {
            const newPost: PostsType = {id: 5, message: action.newPostText, likesCount: 0};
            return {...state, posts: [newPost, ...state.posts]}
        }
        case 'profile/DELETE-POST': {
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        }
        case 'profile/SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'profile/SET-USER-STATUS':
            return {...state, status: action.status}
        case 'profile/SAVE-PHOTO-SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos}}
        default: {
            return state
        }
    }
}

export const getProfile = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getProfile(userId)
            dispatch(setUserProfile(res.data))
}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
            dispatch(setUserStatus(res.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    const res = await profileAPI.savePhoto(file)
            if (res.data.resultCode === 0) {
                dispatch(savePhotoSuccess(res.data.data.photos))
            }
}
export const saveProfile = (profile: FormDataType) => async (dispatch: any, getState: () => AppStateType) => {
    const userId = getState().auth.data.id + ''
    const res = await profileAPI.saveProfile(profile)
            if (res.data.resultCode === 0) {
                dispatch(getProfile(userId))
            } else {
                dispatch(stopSubmit('edit-profile', {_error: res.data.messages[0]}))
                return Promise.reject(res.data.messages[0])
            }
}