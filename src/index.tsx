import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App profile={state.profilePage} dialogs={state.dialogsPage}/>
    </BrowserRouter>,
    document.getElementById('root')
);