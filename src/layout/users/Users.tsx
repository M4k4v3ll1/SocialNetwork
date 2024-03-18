import React, {FC} from 'react';
import s from "./Users.module.css";
import {PHOTO_URL, UserType} from "../../redux/usersReducer";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";

export const Users: FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? s.selectedPage : s.page}
                        onClick={() => props.onPageChanged(p)}
                    >{p} - </span>
                })}
            </div>
            {props.usersPage.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img
                                src={u.photos.large ? u.photos.large : PHOTO_URL}
                                className={s.photo}
                                alt={'user logo'}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
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