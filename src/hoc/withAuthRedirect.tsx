import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.data.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T & {}}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return <ConnectedRedirectComponent/>
};