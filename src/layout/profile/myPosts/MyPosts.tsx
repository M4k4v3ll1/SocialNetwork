import React from 'react';
import styled from "styled-components";
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <StyledPosts>
            <div>
                My posts
            </div>
            <div>
                New Post
            </div>
            <div>
                <Post
                    message='Hi, how are you?'
                    likesCount={5}
                />
                <Post
                    message={`It's my first post!`}
                    likesCount={10}
                />
            </div>
        </StyledPosts>
    );
};

const StyledPosts = styled.div`

`