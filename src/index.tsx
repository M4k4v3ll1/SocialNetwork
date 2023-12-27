import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText, updateMyMessageText, sendMessage, state, subscribe} from './redux/state'

type rerenderEntireTreeType = () => void

const rerenderEntireTree: rerenderEntireTreeType = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                profile={state.profilePage}
                dialogs={state.dialogsPage}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                sendMessage={sendMessage}
                updateMyMessageText={updateMyMessageText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
subscribe(rerenderEntireTree)