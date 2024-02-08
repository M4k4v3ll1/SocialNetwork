import React from 'react';
import {addPostAC, UpdateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {ActionsTypes, StateType} from "../../../redux/store";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        callbackOnChangePost: (newPostText: string) => {
            dispatch(UpdateNewPostTextAC(newPostText))
        },
        callbackOnClickAddPost: () => {
            dispatch(addPostAC())
        }
    }
}



export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)