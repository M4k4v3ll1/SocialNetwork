import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import s from "../dialogsItem/DialogItem.module.css";
import dialogLogo from '../../../components/assets/img/dialogLogo.jpg'

type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem: FC<DialogItemPropsType> = ({name, id}) => {
    let path = '/dialogs/' + id
    return (
        <div>
            <img className={s.dialogLogo} src={dialogLogo} alt='user logo'/>
            <NavLink to={path} className={s.dialog}>{name}</NavLink>
        </div>
    )
}