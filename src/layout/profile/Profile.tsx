import React from 'react';
import styled from "styled-components";
import BG from '../../assets/img/Beach.jpg'

export const Profile = () => {
    return (
        <StyledProfile>
            <img src={BG} alt={'Background picture: Beach'}/>
            <div>
                Ava+description
            </div>
            <div>
                My posts
            </div>
            <div>
                New Post
            </div>
            <div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>

        </StyledProfile>
    );
};

const StyledProfile = styled.main`
  width: 80%;
  background-color: #26c9bb;

  img {
    height: 400px;
  }

`