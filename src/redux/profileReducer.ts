import {PostsType, ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../components/api/Api";

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
        userId: 1,
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
    ReturnType<typeof setUserStatus>

export const addPostAC = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setUserStatus = (status: string) => ({type: 'SET-USER-STATUS', status} as const)

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {id: 5, message: action.newPostText, likesCount: 0};
            return {...state, posts: [newPost, ...state.posts]}
        }
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-USER-STATUS':
            return {...state, status: action.status}
        default: {
            return state
        }
    }
}

export const getProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data))
        })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setUserStatus(res.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}