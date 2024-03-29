import {profileReducer, ProfileReducerActionsTypes, ProfileType} from "./profileReducer";
import {dialogsReducer, dialogsReducerActionsTypes} from "./dialogsReducer";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileType,
    status: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
type DialogsType = {
    id: number
    name: string
}

type DialogsPageType = {
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

export type StoreType = {
    _callSubscriber: () => void
    _state: StateType
    getState: () => StateType
    subscribe: (observer: ObserverType) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ProfileReducerActionsTypes | dialogsReducerActionsTypes

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 5},
                {id: 2, message: 'It\'s my first post!', likesCount: 10}
            ],
            newPostText: '',
            profile: {
                userId: 1,
                aboutMe: '',
                fullName: '',
                contacts: {
                    facebook: '',
                    website: '',
                    vk: '',
                    twitter: '',
                    instagram: '',
                    youtube: '',
                    github: '',
                    mainLink: ''
                },
                lookingForAJob: false,
                lookingForAJobDescription: '',
                photos: {
                    small: '',
                    large: ''
                }
            },
            status: ''
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
    _callSubscriber() {
        console.log('state was changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber();
    }
}