import React from 'react';
import Icon from "../../components/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper>
                <Icon iconId='typeScript'/>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #f8c783;
`