import {ProfilePageType} from "./store";
import {addPostAC, deletePostAC, profileReducer} from "./profileReducer";

let startState: ProfilePageType
beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 5},
            {id: 2, message: 'It\'s my first post!', likesCount: 10}
        ],
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
    }
})
test('new post should be added', () => {
    const endState = profileReducer(startState, addPostAC('Second post message'))
    expect(endState.posts.length).toBe(3)
    expect(endState.posts[2].message).toBe('It\'s my first post!')
    expect(endState.posts[0].message).toBe('Second post message')
    expect(endState.posts[0].likesCount).toBe(0)
})

test('correct post should be deleted', () => {
    const endState = profileReducer(startState, deletePostAC(2))

    expect(endState.posts.length).toBe(1)
    expect(endState.posts[0].message).toBe('Hi, how are you?')
})