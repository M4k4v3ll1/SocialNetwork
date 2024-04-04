import {addPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {ActionsTypes, StateType} from "../../../redux/store";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        callbackOnClickAddPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}



export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)