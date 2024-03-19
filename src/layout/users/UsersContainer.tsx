import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress, unfollow,
    UsersInitialStateType,
    UserType
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../../components/common/preloader/Preloader";

type MapStateToProps = {
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    getUsers: (isFetching: boolean, currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToProps & MapDispatchToProps

class UsersAPIComponent extends React.Component<UsersPropsType, AppStateType> {
    componentDidMount() {
        this.props.getUsers(this.props.isFetching, this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(this.props.isFetching, pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : null
                }
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    usersPage={this.props.usersPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFetching={this.props.isFetching}
                    setUsers={this.props.setUsers}
                    setCurrentPage={this.props.setCurrentPage}
                    setTotalUsersCount={this.props.setTotalUsersCount}
                    toggleIsFetching={this.props.toggleIsFetching}
                    followingInProgress={this.props.followingInProgress}
                    getUsers={this.props.getUsers}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    onPageChanged: setCurrentPage,
    toggleIsFetching,
    toggleIsFollowingProgress,
    getUsers,
    follow,
    unfollow
})(UsersAPIComponent)
