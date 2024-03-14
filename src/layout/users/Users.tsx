import React, {FC} from 'react';
import s from "./Users.module.css";
import {PHOTO_URL, UserType} from "../../redux/usersReducer";
import {UsersPropsType} from "./UsersContainer";

export const Users: FC<UsersPropsType> = ({totalUsersCount, pageSize, currentPage, usersPage, callbackOnClickFollowUser, callbackOnClickUnfollowUser, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={currentPage === p ? s.selectedPage : s.page}
                        onClick={() => onPageChanged(p)}
                    >{p} - </span>
                })}
            </div>
            {usersPage.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photoUrl ? u.photoUrl : PHOTO_URL}
                            className={s.photo}
                            alt={'user logo'}/>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => callbackOnClickUnfollowUser(u.id)}>Unfollow</button>
                                : <button onClick={() => callbackOnClickFollowUser(u.id)}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>Russian Federation</div>
                        <div>Moscow</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};