import React from 'react';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/navbar/Navbar";
import {Profile} from "./layout/profile/Profile";
import {FlexWrapper} from "./components/FlexWrapper";
import {DialogsContainer} from "./layout/dialogs/DialogsContainer";
import {News} from "./layout/News/News";
import {Music} from "./layout/Music/Music";
import {Settings} from "./layout/Settings/Settings";
import {Route} from "react-router-dom";

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
