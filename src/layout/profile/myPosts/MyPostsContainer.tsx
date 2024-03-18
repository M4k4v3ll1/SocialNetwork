import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
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
            dispatch(updateNewPostTextAC(newPostText))
        },
        callbackOnClickAddPost: () => {
            dispatch(addPostAC())
        }
    }
}



export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)