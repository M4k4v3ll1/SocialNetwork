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
        {id: 1, name: 'Maksim Bagryantsev'},
        {id: 2, name: 'Ivan Chekmasov'},
        {id: 3, name: 'Andrew Malikov'},
        {id: 4, name: 'Pavel Ivanushkin'},
        {id: 5, name: 'Jessica Chastain'}
    ],
     messages: [
        {id: 1, isIncoming: false, message: 'Hi'},
        {id: 2, isIncoming: true, message: 'Hi, man!'},
        {id: 3, isIncoming: false, message: 'How are you'},
        {id: 4, isIncoming: true, message: 'Feeling like a rocket! What about you?'},
        {id: 5, isIncoming: false, message: 'Me too! Let\'s go snowboarding'},
        {id: 6, isIncoming: true, message: 'Let\'s ride!'}
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