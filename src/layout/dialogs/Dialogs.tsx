import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogsItem/DialogItem";
import {Message} from "./message/Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Maksim Bagryantsev'} id={1}/>
                <DialogItem name={'Ivan Chekmasov'} id={2}/>
                <DialogItem name={'Andrew Malikov'} id={3}/>
                <DialogItem name={'Pavel Ivanushki'} id={4}/>
                <DialogItem name={'Jessica Chastain'} id={5}/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message={`Let's go snowboarding`}/>
            </div>
        </div>
    )
}