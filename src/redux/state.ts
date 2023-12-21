type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type profilePageType = {
    posts: postsType[]
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
}
export type messagesType = {
    id: number
    isIncoming: boolean
    message: string
}

export type sidebarType = {
    id: number
    isIncoming: boolean
    message: string
}
export let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 5},
            {id: 2, message: 'It\'s my first post!', likesCount: 10}
        ]
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
            {id: 1, isIncoming: true, message: 'Hi, man!'},
            {id: 2, isIncoming: false, message: 'How are you'},
            {id: 2, isIncoming: true, message: 'Feeling like a rocket! What about you?'},
            {id: 3, isIncoming: false, message: 'Me too! Let\'s go snowboarding'},
            {id: 3, isIncoming: true, message: 'Let\'s ride!'}
        ]
    }
}
