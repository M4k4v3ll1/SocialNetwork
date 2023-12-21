import React, {FC} from 'react';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/navbar/Navbar";
import {Profile} from "./layout/profile/Profile";
import {FlexWrapper} from "./components/FlexWrapper";
import {Dialogs} from "./layout/dialogs/Dialogs";
import {News} from "./layout/News/News";
import {Music} from "./layout/Music/Music";
import {Settings} from "./layout/Settings/Settings";
import {dialogsPageType, profilePageType} from "./redux/state";
import {Route} from "react-router-dom";

type AppPropsType = {
    profile: profilePageType
    dialogs: dialogsPageType
}

const App: FC<AppPropsType> = (
    {
        profile,
        dialogs
    }
) => {
    return (
                   <div className="app">
                <Header/>
                <FlexWrapper justify={'flex-start'} padding={'0px'}>
                    <Navbar/>
                    <div>
                        <Route path='/profile' render={() => <Profile posts={profile.posts}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs data={dialogs}/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                </FlexWrapper>
            </div>
          );
}

export default App;
