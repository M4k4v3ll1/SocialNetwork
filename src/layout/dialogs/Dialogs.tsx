import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogsItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../components/common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export const Dialogs: FC<DialogsPropsType> = (
    {
        dialogsPage,
        callbackOnChangeMessageText
        // isAuth
    }
) => {
    const dialogsElements = dialogsPage.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
    const messagesElements = dialogsPage.messages.map(m =>
        <Message key={m.id} isIncoming={m.isIncoming} message={m.message}/>
    )

    const addNewMessage = (value: FormDataType) => {
        callbackOnChangeMessageText(value.newMessageBody)
    }

    // if (!isAuth) {
    //     return <Redirect to={'/login'}/>
    // }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

type FormDataType = {
    newMessageBody: string
}
const maxLength100 = maxLengthCreator(100)
const AddMessageForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={FormControl}
                    validate={[required, maxLength100]}
                    name={'newMessageBody'}
                    placeholder={'Enter your message'}
                type={'textarea'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)