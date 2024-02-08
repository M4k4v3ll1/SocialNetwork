import React, {FC} from 'react';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/navbar/Navbar";
import {Profile} from "./layout/profile/Profile";
import {FlexWrapper} from "./components/FlexWrapper";
import {DialogsContainer} from "./layout/dialogs/DialogsContainer";
import {News} from "./layout/News/News";
import {Music} from "./layout/Music/Music";
import {Settings} from "./layout/Settings/Settings";
import {Route} from "react-router-dom";
import {StoreType} from "./redux/store";

type AppPropsType = {
    store: StoreType
}

const App: FC<AppPropsType> = (
    {
        store
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
                                store={store}
                            />}
                    />
                    <Route
                        path='/dialogs'
                        render={() =>
                            <DialogsContainer
                                store={store}
                            />}
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
