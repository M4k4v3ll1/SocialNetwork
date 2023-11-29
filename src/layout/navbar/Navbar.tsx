import React, {FC} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {NavItemPropsType} from "../../App";

export type NavbarPropsType = {
    navItems: Array<NavItemPropsType>
}

export const Navbar: FC<NavbarPropsType> = ({navItems}) => {
    const newNavItems: Array<JSX.Element> = [];
    for (let i = 0; i < navItems.length; i++) {
        const navItem: JSX.Element = <li>
            <a>{navItems[i].title}</a>
        </li>
        newNavItems.push(navItem)
    }

    return (
        <StyledNav>
            <FlexWrapper justify={'flex-start'}>
                <ul>
                    {newNavItems}
                </ul>
            </FlexWrapper>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  background-color: #96f37b;
  width: 20%;

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }
  
  li {
    color: white;
  }
`
