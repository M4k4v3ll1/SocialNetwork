import React, {useEffect} from 'react';
import {Navbar} from "./layout/navbar/Navbar";
import {FlexWrapper} from "./components/FlexWrapper";
import {News} from "./layout/news/News";
import {Music} from "./layout/music/Music";
import {Settings} from "./layout/settings/Settings";
import {Redirect, Route} from "react-router-dom";
import {UsersContainer} from "./layout/users/UsersContainer";
import HeaderContainer from "./layout/header/HeaderContainer";
import Login from "./components/login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";

const DialogsContainer = React.lazy(() => import ("./layout/dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./layout/profile/ProfileContainer"))

export const App = () => {
    const initialized = useSelector((state: AppStateType) => state.app.initialized)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeApp())
    }, [])
    return (
        <>
            {!initialized
                ? <Preloader/>
                :
                <div className="app">
                    <HeaderContainer/>
                    <FlexWrapper justify={'flex-start'} padding={'0px'}>
                        <Navbar/>
                        <div>
                            <Route
                                path='/'
                                render={() =>
                                    <Redirect to={'/profile'}/>}
                            />
                            <Route
                                path='/login'
                                render={() =>
                                    <Login/>}
                            />
                            <Route
                                path='/profile/:userId?'
                                render={() => {
                                    return <React.Suspense fallback={<div>Loading...</div>}>
                                        <ProfileContainer/>
                                    </React.Suspense>
                                }}
                            />
                            <Route
                                path='/dialogs'
                                render={() => {
                                    return <React.Suspense fallback={<div>Loading...</div>}>
                                        <DialogsContainer/>
                                    </React.Suspense>
                                }}
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
                            <Route
                                path='*'
                                render={() =>
                                    <div>404 NOT FOUND</div>}/>
                        </div>
                    </FlexWrapper>
                </div>
            }
        </>
    );
}

