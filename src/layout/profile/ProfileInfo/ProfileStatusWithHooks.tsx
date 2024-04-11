import React, {ChangeEvent, FC, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: FC<ProfileStatusPropsType> = ({status, updateStatus}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(status)
    const toggleMode = () => {
        setEditMode(!editMode)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setLocalStatus(status)
    }, [status])
    return (
        <div>
            {editMode
                ? <div><input
                    placeholder={'Как дела?'}
                    value={localStatus}
                    autoFocus
                    onBlur={() => {
                        setEditMode(!editMode);
                        updateStatus(localStatus)
                    }}
                    onChange={onChangeHandler}
                /></div>
                : <div>
                    <span
                        onDoubleClick={toggleMode}
                    >{status || '-------'}
                </span></div>
            }
        </div>
    );
}