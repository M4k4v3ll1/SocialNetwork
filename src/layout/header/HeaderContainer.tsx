import React, {ComponentType, FC} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DataType, logout} from "../../redux/auth-reducer";
import {compose} from "redux";

export type HeaderContainerPropType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    auth: DataType
}

type MapDispatchToProps = {
    logout: () => void
}

const HeaderContainer: FC<HeaderContainerPropType> = (props) => {
    return (
        <Header auth={props.auth} logout={props.logout}/>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.data.isAuth,
    auth: state.auth.data
})

export default compose<ComponentType>(
    connect(mapStateToProps, {logout})
    )(HeaderContainer)