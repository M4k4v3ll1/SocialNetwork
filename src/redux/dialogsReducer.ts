export type dialogsReducerActionsTypes =
    ReturnType<typeof SendMessageAC> |
    ReturnType<typeof UpdateMyMessageAC>

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessagesType[]
    newMessageText: string
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
    newMessageText: ''
}

export const SendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)
export const UpdateMyMessageAC = (messageText: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', messageText} as const)


export const dialogsReducer = (state: DialogsPageType = initialState, action: dialogsReducerActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            const newMessage = {id: 7, isIncoming: false, message: state.newMessageText};
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.messageText}
        }
        default: {
            return state
        }
    }
}