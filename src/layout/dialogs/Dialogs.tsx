import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogsItem/DialogItem";
import {Message} from "./message/Message";
import {ActionsTypes, DialogsPageType, SendMessageAC, UpdateMyMessageAC} from "../../redux/store";

type DialogsPropsType = {
    data: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    myMessage: string
}

export const Dialogs: FC<DialogsPropsType> = (
    {
        data,
        dispatch,
        myMessage
    }
) => {
    const dialogsElements = data.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
    const messagesElements = data.messages.map(m =>
        <Message key={m.id} isIncoming={m.isIncoming} message={m.message}/>
    )

    const onClickSendNewMessageHandler = () => {
        dispatch(SendMessageAC())
    }
    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(UpdateMyMessageAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea
                    onChange={onChangeMessageTextHandler}
                    placeholder={'Enter your message'}
                    value={myMessage}/>
                <button onClick={onClickSendNewMessageHandler} className={s.btn}>Send</button>
            </div>
        </div>
    )
}