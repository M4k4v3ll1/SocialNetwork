import React from 'react';
import {
    DialogsPageType,
    SendMessageAC,
    UpdateMyMessageAC
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    myMessage: string
}
type MapDispatchPropsType = {
    callbackOnChangeMessageText: (messageText: string) => void
    callbackOnClickSendNewMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        myMessage: state.dialogsPage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        callbackOnChangeMessageText: (newMessageText: string) => {
            dispatch(UpdateMyMessageAC(newMessageText))
        },
        callbackOnClickSendNewMessage: () => {
            dispatch(SendMessageAC())
        },

    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)