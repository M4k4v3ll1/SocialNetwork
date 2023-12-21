import React from 'react';
import s from "./Header.module.css";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import iconsSprite from "../../components/assets/img/icons-sprite.svg";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper>
                <img src={iconsSprite} className={s.img_logo} alt='logo image'/>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #f8c783;
`