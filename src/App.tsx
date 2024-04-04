import React from 'react';
import {Navbar} from "./layout/navbar/Navbar";
import {FlexWrapper} from "./components/FlexWrapper";
import {News} from "./layout/news/News";
import {Music} from "./layout/music/Music";
import {Settings} from "./layout/settings/Settings";
import {Route, withRouter} from "react-router-dom";
import {UsersContainer} from "./layout/users/UsersContainer";
import ProfileContainer from "./layout/profile/ProfileContainer";
import HeaderContainer from "./layout/header/HeaderContainer";
import DialogsContainer from "./layout/dialogs/DialogsContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";

type MapStateToProps = {
    initialized: boolean
}
type MapDispatchToProps = {
    initializeApp: () => void
}
type AppProps = MapStateToProps & MapDispatchToProps

class App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        {
            if (!this.props.initialized) {
                return <Preloader/>
            }
        }
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
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}
    ))(App)

