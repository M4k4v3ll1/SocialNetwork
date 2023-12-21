import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogsItem/DialogItem";
import {Message} from "./message/Message";
import {dialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    data: dialogsPageType
}

export const Dialogs: FC<DialogsPropsType> = (
    {
        data
    }
) => {
    let dialogsElements = data.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>
)
    let messagesElements = data.messages.map(m =>
        <Message key={m.id} isIncoming={m.isIncoming} message={m.message}/>
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}