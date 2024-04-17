import React, {FC, useState} from 'react';
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    portionSize: number
}
export const Paginator: FC<PaginatorPropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Previous</button>}
                {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(p => {
                    return <span
                        className={currentPage === p ? s.selectedPage : s.page}
                        onClick={() => onPageChanged(p)}
                    >{p} - </span>
                })}
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>
    );
};