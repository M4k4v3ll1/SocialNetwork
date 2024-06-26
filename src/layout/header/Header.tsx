import React from 'react';
import s from "./Header.module.css";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import iconsSprite from "../../components/assets/img/icons-sprite.svg";
import {NavLink} from "react-router-dom";
import {HeaderContainerPropType} from "./HeaderContainer";

export const Header = (props: HeaderContainerPropType) => {
    return (
        <StyledHeader>
            <FlexWrapper>
                <img src={iconsSprite} className={s.img_logo} alt='logo image'/>
                <div className={s.loginBlock}>
                    {props.auth.isAuth
                        ? (<div>{props.auth.login} - <button onClick={props.logout}>Logout</button></div>)
                    : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #f8c783;
  display: flex;
`