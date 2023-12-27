import React, {ChangeEvent, FC, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogsItem/DialogItem";
import {Message} from "./message/Message";
import {dialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    data: dialogsPageType
    sendMessage: () => void
    updateMyMessageText: (messageText: string) => void
    myMessage: string
}

export const Dialogs: FC<DialogsPropsType> = (
    {
        data,
        sendMessage,
        updateMyMessageText,
        myMessage
    }
) => {
    const dialogsElements = data.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
    const messagesElements = data.messages.map(m =>
        <Message key={m.id} isIncoming={m.isIncoming} message={m.message}/>
    )

    const newMessage = useRef<HTMLTextAreaElement>(null);
    const onClickSendNewMessageHandler = () => {
        sendMessage()
    }
    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateMyMessageText(e.currentTarget.value)
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
                    ref={newMessage}
                    value={myMessage}/>
                <button onClick={onClickSendNewMessageHandler} className={s.btn}>Send</button>
            </div>
        </div>
    )
}