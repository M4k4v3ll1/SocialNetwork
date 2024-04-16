import React, {FC} from "react";
import {Field, WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css'

type TextArea = WrappedFieldProps & {
    type: 'textarea' | 'input'
}
export const FormControl: FC<TextArea> = ({input, meta: {touched, error}, type, ...props}) => {
    const hasError = touched && error
    const Tag = type
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                <Tag {...props} {...input}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const createField = (placeholder: string, name: string, component: FC<TextArea> | string, validators?: (value: string) => undefined | string, type?: string, text?: string) => {
    <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               type={type}
        />{text}
    </div>
}