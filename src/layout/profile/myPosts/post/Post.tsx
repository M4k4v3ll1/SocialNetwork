import React, {FC} from 'react';
import styled from "styled-components";
import postLogo from '../../../../components/assets/img/postLogo.png'

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post: FC<PostPropsType> = ({message, likesCount}) => {
    return (
        <StyledPost>
            <StyledPostImg src={postLogo} alt={'User logo'}/>
            {message}
            <div>
                <span>{likesCount} likes</span>
            </div>
        </StyledPost>
    );
};

const StyledPost = styled.div`

`
const StyledPostImg = styled.img`
  height: 50px;
`
