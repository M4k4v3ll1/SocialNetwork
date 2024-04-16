export type dialogsReducerActionsTypes =
    ReturnType<typeof SendMessageAC>

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessagesType[]
}
export type DialogType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    isIncoming: boolean
    message: string
}

const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Максим Багрянцев'},
        {id: 2, name: 'Иван Чекмасов'},
        {id: 3, name: 'Андрей Маликов'},
        {id: 4, name: 'Павел Иванушкин'},
        {id: 5, name: 'Jessica Chastain'}
    ],
     messages: [
        {id: 1, isIncoming: false, message: 'Привет'},
        {id: 2, isIncoming: true, message: 'Доброго дня, товарищ!'},
        {id: 3, isIncoming: false, message: 'Как поживаешь'},
        {id: 4, isIncoming: true, message: 'С гордостью в сердце! Готов?'},
        {id: 5, isIncoming: false, message: 'Всегда готов!'},
        {id: 6, isIncoming: true, message: 'Добре!'}
    ],
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: dialogsReducerActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'dialogs/SEND-MESSAGE': {
            const newMessage = {id: 7, isIncoming: false, message: action.newMessageBody};
            return {...state, messages: [...state.messages, newMessage]}
        }
        default: {
            return state
        }
    }
}


export const SendMessageAC = (newMessageBody: string) => ({type: 'dialogs/SEND-MESSAGE', newMessageBody} as const)