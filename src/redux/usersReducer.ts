import {usersAPI} from "../components/api/Api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers";

export type UserType = {
    id: number
    followed: boolean
    name: string
    photos: {
        small: string
        large: string
    }

    status: string
    location: {
        country: string
        city: string
    }
}

export type UsersInitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type UsersReducerActionTypes =
    ReturnType<typeof AddUserAC> |
    ReturnType<typeof deleteUserAC> |
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleIsFollowingProgress>

export const PHOTO_URL: string = 'data:image/png;base64,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'

const AddUserAC = (userName: string, country: string, city: string) => ({
    type: 'ADD-USER',
    userName,
    country,
    city
} as const)
export const deleteUserAC = (userId: number) => ({type: 'users/DELETE-USER', userId} as const)
export const followSuccess = (userID: number) => ({type: 'users/FOLLOW', userID} as const)
export const unfollowSuccess = (userID: number) => ({type: 'users/UNFOLLOW', userID} as const)
export const setUsers = (users: UserType[]) => ({type: 'users/SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'users/SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'users/SET-TOTAL-USERS-COUNT',
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'users/TOGGLE-ISFETCHING', isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'users/TOGGLE-ISFOLLOWING',
    isFetching,
    userId
} as const)

const initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersInitialStateType = initialState, action: UsersReducerActionTypes): UsersInitialStateType => {
    switch (action.type) {
        // case 'ADD-USER': {
        //     let newUser: UserType = {id: 6, followed: false, name: action.userName, status: 'Want to dance', location: {country: action.country, city: action.city}}
        // return {...state, users: [...state.users, newUser]}
        // }
        // case 'DELETE-USER': {
        //     return {...state, users: state.users.filter(u => u.id !== action.userId)}
        // }
        case 'users/SET-USERS': {
            return {...state, users: [...action.users]}
        }
        case 'users/FOLLOW': {
            return {...state, users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})}
        }
        case 'users/UNFOLLOW': {
            return {...state, users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})}
        }
        case 'users/SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'users/SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case 'users/TOGGLE-ISFETCHING':
            return {...state, isFetching: action.isFetching}
        case 'users/TOGGLE-ISFOLLOWING':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const requestUsers = (isFetching: boolean, page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(isFetching))
    const data = await usersAPI.requestUsers(page, pageSize)
    dispatch(toggleIsFetching(isFetching))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}
const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    const res = await apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}