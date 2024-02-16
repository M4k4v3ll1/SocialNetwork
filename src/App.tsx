import React from 'react';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/navbar/Navbar";
import {Profile} from "./layout/profile/Profile";
import {FlexWrapper} from "./components/FlexWrapper";
import {DialogsContainer} from "./layout/dialogs/DialogsContainer";
import {News} from "./layout/news/News";
import {Music} from "./layout/music/Music";
import {Settings} from "./layout/settings/Settings";
import {Route} from "react-router-dom";
import {UsersContainer} from "./layout/users/UsersContainer";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <FlexWrapper justify={'flex-start'} padding={'0px'}>
                <Navbar/>
                <div>
                    <Route
                        path='/profile'
                        render={() =>
                            <Profile/>}
                    />
                    <Route
                        path='/dialogs'
                        render={() =>
                            <DialogsContainer/>}
                    />
                    <Route
                        path='/users'
                        render={() =>
                            <UsersContainer/>}/>
                    <Route
                        path='/news'
                        render={() =>
                            <News/>}/>
                    <Route
                        path='/music'
                        render={() =>
                            <Music/>}/>
                    <Route
                        path='/settings'
                        render={() =>
                            <Settings/>}/>
                </div>
            </FlexWrapper>
        </div>
    );
}

export default App;
