import React, {FC} from "react";

type MessagePropsType = {
    message: string
}
export const Message: FC<MessagePropsType> = ({message}) => {
    return (
        <div>{message}</div>
    )
}