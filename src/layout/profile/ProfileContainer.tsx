import React, {FC, useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToProps = {
    profile: ProfileType
}

type MapDispatchToProps = {
    setUserProfile: (profile: ProfileType) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                props.setUserProfile(res.data)
            })
    }, [])

        return (
            <Profile profile={props.profile}/>
        );
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);