import React, {FC} from 'react';
import {UserType} from "../../redux/usersReducer";
import {UsersPropsType} from "./UsersContainer";
import {Paginator} from "../../components/common/paginator/Paginator";
import {User} from "./user/User";

export const Users: FC<UsersPropsType> = ({
                                              totalUsersCount,
                                              pageSize,
                                              users,
                                              followingInProgress,
                                              follow,
                                              unfollow,
                                              currentPage,
                                              onPageChanged
                                          }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            {users.map((u: UserType) =>
                <User
                    key={u.id}
                    user={u}
                    followingInProgress={followingInProgress}
                    follow={follow}
                    unfollow={unfollow}
                />
            )}
        </div>
    );
};