import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import {PHOTO_URL} from "../../redux/usersReducer";


export const Users: React.FC<UsersPropsType> = ({
                                                    usersPage,
                                                    callbackOnClickFollowUser,
                                                    callbackOnClickUnfollowUser,
                                                    setUsers
                                                }) => {
    if (usersPage.users.length === 0) {
        setUsers([
            {
                id: 1,
                followed: true,
                name: 'Максим Багрянцев',
                photoUrl: PHOTO_URL,
                status: 'Want to dance',
                location: {country: 'Россия', city: 'Самара'}
            },
            {
                id: 2,
                followed: false,
                photoUrl: PHOTO_URL,
                name: 'Иван Чекмасов',
                status: 'Want to dance',
                location: {country: 'Россия', city: 'Похвистнево'}
            },
            {
                id: 3,
                followed: true,
                photoUrl: PHOTO_URL,
                name: 'Андрей Маликов',
                status: 'Want to dance',
                location: {country: 'Россия', city: 'Дмитровград'}
            },
            {
                id: 4,
                followed: false,
                photoUrl: PHOTO_URL,
                name: 'Павел Иванушкин',
                status: 'Want to dance',
                location: {country: 'Россия', city: 'Отрадный'}
            },
            {
                id: 5,
                followed: true,
                photoUrl: PHOTO_URL,
                name: 'Jessica Chastain',
                status: 'Want to dance',
                location: {country: 'USA', city: 'Boston'}
            }
        ])
    }
    return (
        <div>
            {usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photoUrl}
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
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};
