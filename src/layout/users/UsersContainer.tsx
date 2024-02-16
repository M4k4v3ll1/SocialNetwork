import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {FollowUserAC, SetUsersAC, UnfollowUserAC, UsersInitialStateType, UserType} from "../../redux/usersReducer";

type MapStateToProps = {
    usersPage: UsersInitialStateType
}

type MapDispatchToProps = {
    callbackOnClickFollowUser: (userID: number) => void
    callbackOnClickUnfollowUser: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        callbackOnClickFollowUser: (userID: number) => {
            dispatch(FollowUserAC(userID))
        },
        callbackOnClickUnfollowUser: (userID: number) => {
            dispatch(UnfollowUserAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(SetUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
