import {FC} from "react";
import {WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css'

type TextArea = WrappedFieldProps & {
    type: 'textarea' | 'input'
}
export const FormControl: FC<TextArea> = ({input, meta, type, ...props}) => {
    const hasError = meta.touched && meta.error
    const Tag = type
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                <Tag {...props} {...input}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
