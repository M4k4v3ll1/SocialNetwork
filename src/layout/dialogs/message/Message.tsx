import React, {FC} from "react";
import s from './Message.module.css'

type MessagePropsType = {
    message: string
    isIncoming: boolean
}
export const Message: FC<MessagePropsType> = ({message, isIncoming}) => {
    return (
        <div className={isIncoming ? s.received : s.send}>
            {message}
        </div>
    )
}