import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {
    FollowUserAC,
    SetCurrentPageAC, SetTotalUsersCountAC,
    SetUsersAC,
    UnfollowUserAC,
    UsersInitialStateType,
    UserType
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";

type MapStateToProps = {
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchToProps = {
    callbackOnClickFollowUser: (userID: number) => void
    callbackOnClickUnfollowUser: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
type OnPageChangedType = (pageNumber: number) => void

export type UsersPropsType = MapStateToProps & MapDispatchToProps & OnPageChangedType

class UsersAPIComponent extends React.Component<UsersPropsType, AppStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            usersPage={this.props.usersPage}
            callbackOnClickFollowUser={this.props.callbackOnClickFollowUser}
            callbackOnClickUnfollowUser={this.props.callbackOnClickUnfollowUser}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(SetTotalUsersCountAC(totalUsersCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
