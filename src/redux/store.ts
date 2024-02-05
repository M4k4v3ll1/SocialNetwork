export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}
export type MessagesType = {
    id: number
    isIncoming: boolean
    message: string
}
type ObserverType = () => void

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof UpdateNewPostTextAC> |
    ReturnType<typeof SendMessageAC> |
    ReturnType<typeof UpdateMyMessageAC>

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const UpdateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const)
export const SendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)
export const UpdateMyMessageAC = (messageText: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', messageText} as const)

export type StoreType = {
    _callSubscriber: () => void
    _state: StateType
    getState: () => StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    sendMessage: () => void
    updateMyMessageText: (messageText: string) => void
    subscribe: (observer: ObserverType) => void
    dispatch: (action: ActionsTypes) => void
}

export const store: StoreType = {
    _callSubscriber() {
        console.log('state was changed')
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 5},
                {id: 2, message: 'It\'s my first post!', likesCount: 10}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addPost() {
        const newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    sendMessage() {
        const newMessage = {id: 7, isIncoming: false, message: this._state.dialogsPage.newMessageText};
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber();
    },
    updateMyMessageText(messageText) {
        this._state.dialogsPage.newMessageText = messageText;
        this._callSubscriber();
    },
    dispatch(action: ActionsTypes) {
        if (action.type === "ADD-POST") {
            const newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === "SEND-MESSAGE") {
            const newMessage = {id: 7, isIncoming: false, message: this._state.dialogsPage.newMessageText};
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessageText = action.messageText;
            this._callSubscriber();
        } else {
            return this._state
        }
    }
}