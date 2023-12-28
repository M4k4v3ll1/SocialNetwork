import React, {FC} from 'react';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/navbar/Navbar";
import {Profile} from "./layout/profile/Profile";
import {FlexWrapper} from "./components/FlexWrapper";
import {Dialogs} from "./layout/dialogs/Dialogs";
import {News} from "./layout/News/News";
import {Music} from "./layout/Music/Music";
import {Settings} from "./layout/Settings/Settings";
import {Route} from "react-router-dom";
import {stateType, storeType} from "./redux/store";

type AppPropsType = {
    store: storeType
}

const App: FC<AppPropsType> = (
    {
        store,
    }
) => {

    // @ts-ignore
    const state: stateType = store.getState()
    return (
        <div className="app">
            <Header/>
            <FlexWrapper justify={'flex-start'} padding={'0px'}>
                <Navbar/>
                <div>
                    <Route
                        path='/profile'
                        render={() =>
                            <Profile
                                posts={state.profilePage.posts}
                                addPost={store.addPost.bind(store)}
                                updateNewPostText={store.updateNewPostText.bind(store)}
                                newPostText={state.profilePage.newPostText}/>}/>
                    <Route
                        path='/dialogs'
                        render={() =>
                            <Dialogs
                                data={state.dialogsPage}
                                sendMessage={store.sendMessage.bind(store)}
                                updateMyMessageText={store.updateMyMessageText.bind(store)}
                                myMessage={state.dialogsPage.myMessage}/>}/>
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
