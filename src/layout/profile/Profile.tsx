import React from 'react';
import styled from "styled-components";
import BG from '../../assets/img/Beach.jpg'
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <StyledProfile>
            <StyledProfileImg src={BG} alt={'Background picture: Beach'}/>
            <div>
                Ava+description
            </div>
            <MyPosts/>
        </StyledProfile>
    );
};

const StyledProfile = styled.main`
  width: 80%;
  background-color: #26c9bb;
`
const StyledProfileImg = styled.img`
  height: 400px;
`