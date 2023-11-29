import React from 'react';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/navbar/Navbar";
import {Profile} from "./layout/profile/Profile";
import {FlexWrapper} from "./components/FlexWrapper";
import {Dialogs} from "./layout/dialogs/Dialogs";

export type NavItemPropsType = {
    id: number
    title: string
}

function App() {
    const navItems = [
        {
            id: 1,
            title: 'Profile'
        },
        {
            id: 2,
            title: 'Messages'
        },
        {
            id: 3,
            title: 'News'
        },
        {
            id: 4,
            title: 'Music'
        },
        {
            id: 5,
            title: 'Settings'
        }
    ]
    return (
        <div className="app">
            <Header/>
            <FlexWrapper justify={'flex-start'} padding={'0px'}>
                <Navbar navItems={navItems}/>
                {/*<Profile/>*/}
                <Dialogs/>
            </FlexWrapper>
        </div>
    );
}

export default App;
