import React, {FC, useEffect} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DataType, setUser} from "../../redux/auth-reducer";

export type HeaderContainerPropType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    auth: DataType
}

type MapDispatchToProps = {
    setUser: () => void
}

export const HeaderContainer: FC<HeaderContainerPropType> = (props) => {
    useEffect(() => {
        props.setUser()
    }, [])

    return (
        <Header auth={props.auth} setUser={props.setUser}/>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.data.isAuth,
    auth: state.auth.data
})

export default connect(mapStateToProps, {setUser})(HeaderContainer)