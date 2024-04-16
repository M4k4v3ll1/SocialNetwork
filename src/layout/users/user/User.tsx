import React, {FC} from 'react';
import s from "../Users.module.css";
import {PHOTO_URL, UserType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}
export const User: FC<UserPropsType> = ({
                                            user,
                                            followingInProgress,
                                            follow,
                                            unfollow,
                                        }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={user.photos.large ? user.photos.large : PHOTO_URL}
                            className={s.photo}
                            alt={'user logo'}/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id)
                                }}
                            >
                                Unfollow
                            </button>
                            : <button
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => follow(user.id)}
                            >
                                Follow
                            </button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>Russian Federation</div>
                    <div>Moscow</div>
                </span>
            </span>
        </div>
    )
}