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

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    myMessage: string
}
type MapDispatchPropsType = {
    callbackOnChangeMessageText: () => void
    callbackOnClickSendNewMessage: (messageText: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        myMessage: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        callbackOnChangeMessageText: () => {
            dispatch(SendMessageAC())
        },
        callbackOnClickSendNewMessage: (newMessageText: string) => {
            dispatch(UpdateMyMessageAC(newMessageText))
        },

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)