export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type profilePageType = {
    posts: postsType[]
    newPostText: string
}
export type postsType = {
    id: number
    message: string
    likesCount: number
}
export type dialogsType = {
    id: number
    name: string
}

export type dialogsPageType = {
    dialogs: dialogsType[]
    messages: messagesType[]
    myMessage: string
}
export type messagesType = {
    id: number
    isIncoming: boolean
    message: string
}
type observerType = () => void

export type storeType = {
    _callSubscriber: () => void
    _state: stateType
    getState: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    sendMessage: () => void
    updateMyMessageText: (messageText: string) => void
    subscribe: (observer: observerType) => void
}

export const store: storeType = {
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
            myMessage: ''
        }
    },
    getState() {
        return this._state
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
        const newMessage = {id: 7, isIncoming: false, message: this._state.dialogsPage.myMessage};
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.myMessage = '';
        this._callSubscriber();
    },
    updateMyMessageText(messageText) {
        this._state.dialogsPage.myMessage = messageText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}