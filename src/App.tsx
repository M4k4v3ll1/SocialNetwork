import React from 'react';
import {Navbar} from "./layout/navbar/Navbar";
import {FlexWrapper} from "./components/FlexWrapper";
import {DialogsContainer} from "./layout/dialogs/DialogsContainer";
import {News} from "./layout/news/News";
import {Music} from "./layout/music/Music";
import {Settings} from "./layout/settings/Settings";
import {Route} from "react-router-dom";
import {UsersContainer} from "./layout/users/UsersContainer";
import ProfileContainer from "./layout/profile/ProfileContainer";
import HeaderContainer from "./layout/header/HeaderContainer";
import {Login} from "./components/login/Login";

const App = () => {

    return (
        <div className="app">
            <HeaderContainer/>
            <FlexWrapper justify={'flex-start'} padding={'0px'}>
                <Navbar/>
                <div>
                    <Route
                        path='/login'
                        render={() =>
                            <Login/>}
                    />
                    <Route
                        path='/profile/:userId?'
                        render={() => (
                            <ProfileContainer/>)}
                    />
                    <Route
                        path='/dialogs'
                        render={() =>
                            <DialogsContainer/>}
                    />
                    <Route
                        path='/users'
                        render={() =>
                            <UsersContainer/>}
                    />
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
