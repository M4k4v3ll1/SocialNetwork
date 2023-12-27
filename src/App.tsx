import React, {FC} from 'react';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/navbar/Navbar";
import {Profile} from "./layout/profile/Profile";
import {FlexWrapper} from "./components/FlexWrapper";
import {Dialogs} from "./layout/dialogs/Dialogs";
import {News} from "./layout/News/News";
import {Music} from "./layout/Music/Music";
import {Settings} from "./layout/Settings/Settings";
import {dialogsPageType, profilePageType, sendMessage} from "./redux/state";
import {Route} from "react-router-dom";

type AppPropsType = {
    profile: profilePageType
    dialogs: dialogsPageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    sendMessage: () => void
    updateMyMessageText: (messageText: string) => void
}

const App: FC<AppPropsType> = (
    {
        profile,
        dialogs,
        addPost,
        updateNewPostText,
        updateMyMessageText
    }
) => {
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
                                posts={profile.posts}
                                addPost={addPost}
                                updateNewPostText={updateNewPostText}
                                newPostText={profile.newPostText}/>}/>
                    <Route
                        path='/dialogs'
                        render={() =>
                            <Dialogs
                                data={dialogs}
                                sendMessage={sendMessage}
                                updateMyMessageText={updateMyMessageText}
                                myMessage={dialogs.myMessage}/>}/>
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
