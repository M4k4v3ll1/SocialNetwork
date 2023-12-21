import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import s from "../dialogsItem/DialogItem.module.css";

type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem: FC<DialogItemPropsType> = ({name, id}) => {
    let path = '/dialogs/' + id
    return (
        <NavLink to={path} className={s.dialog}>{name}</NavLink>
    )
}