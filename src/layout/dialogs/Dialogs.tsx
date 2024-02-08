import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogsItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs: FC<DialogsPropsType> = (
    {
        dialogsPage,
        myMessage,
        callbackOnChangeMessageText,
        callbackOnClickSendNewMessage
    }
) => {
    const dialogsElements = dialogsPage.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
    const messagesElements = dialogsPage.messages.map(m =>
        <Message key={m.id} isIncoming={m.isIncoming} message={m.message}/>
    )

    const onClickSendNewMessageHandler = (myMessage: string) => {
        callbackOnClickSendNewMessage(myMessage)
    }
    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        callbackOnChangeMessageText(e.currentTarget.value)
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