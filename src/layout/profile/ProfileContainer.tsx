import React, {FC, useEffect} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, ProfileType} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToProps = {
    profile: ProfileType
}

type MapDispatchToProps = {
    getProfile: (userId: string) => void
}

type ProfileContainerPropsType = MapStateToProps & MapDispatchToProps

type PathParamsType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

export const ProfileContainer: FC<CommonPropsType> = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        props.getProfile(userId)
    }, [])

    return (
        <Profile profile={props.profile}/>
    );
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile
})

export default WithAuthRedirect(connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent))