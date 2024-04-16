import React, {FC, memo} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./post/Post";
import {postsType} from "../../../redux/state";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {FormControl} from "../../../components/common/formsControls/FormsControls";

type MyPostsPropsType = {
    posts: postsType[]
    callbackOnClickAddPost: (newPostText: string) => void
}

export const MyPosts: FC<MyPostsPropsType> = memo((
    {
        posts,
        callbackOnClickAddPost
    }
) => {
    console.log('Render MyPosts')
    const postElements = posts.map(p =>
        <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addNewPost = (value: FormDataType) => {
        callbackOnClickAddPost(value.newPostBody)
    }


    return (
        <div className={s.postsBlocks}>
            <h3>
                My posts
            </h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div>
                {postElements}
            </div>
        </div>
    );
})

type FormDataType = {
    newPostBody: string
}
const maxLength10 = maxLengthCreator(10)
const AddPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type={'textarea'}
                    component={FormControl}
                    name={'newPostBody'}
                    placeholder={`What's new?`}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<FormDataType>({form: 'profileAddPostForm'})(AddPostForm)