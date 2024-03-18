import React, {FC, useEffect} from 'react';

import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DataType, setAuthUserData} from "../../redux/auth-reducer";

export type HeaderContainerPropType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    auth: DataType
}

type MapDispatchToProps = {
    setAuthUserData: (data: DataType) => void
}

export const HeaderContainer: FC<HeaderContainerPropType> = (props) => {
    useEffect(() => {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(res => {
               if (res.data.resultCode === 0) {
                   props.setAuthUserData(res.data.data)
               }
            })
    }, [])

    return (
        <Header auth={props.auth} setAuthUserData={props.setAuthUserData}/>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    auth: state.auth.data
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)