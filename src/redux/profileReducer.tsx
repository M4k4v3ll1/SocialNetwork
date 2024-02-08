import {PostsType, ProfilePageType} from "./store";

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post!', likesCount: 10}
    ],
    newPostText: ''
}

export type profileReducerActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof UpdateNewPostTextAC>

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const UpdateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const)


export const profileReducer = (state: ProfilePageType = initialState, action: profileReducerActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {id: 5, message: state.newPostText, likesCount: 0};
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }
        default: {
            return state
        }
    }
}