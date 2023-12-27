let rerenderEntireTree = () => {
    console.log('state was changed')
}

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

export let state: stateType = {
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
}

export const addPost = () => {
    const newPost: postsType = {id: 5, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const sendMessage = () => {
    const newMessage: messagesType = {id: 7, isIncoming: false, message: state.dialogsPage.myMessage}
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.myMessage = ''
    rerenderEntireTree()

}
export const updateMyMessageText = (messageText: string) => {
    state.dialogsPage.myMessage = messageText
    rerenderEntireTree()
}

export const subscribe = (observer: observerType) => {
    rerenderEntireTree = observer
}