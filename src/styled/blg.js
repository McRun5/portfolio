import styled from 'styled-components';

export const FirstTitle = styled.h1`

`

export const BlogPosts = styled.div`
    margin: 2em 0;
`

export const Post = styled.div`
    margin:1em 0;
    padding: .5em 1em;
    border-radius:8px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    background-color: ${ props =>{
        switch(props.currentTheme){
            case 'colored' : return props.theme.colored.secondBackgroundColor;
            case 'dark' : return props.theme.dark.secondBackgroundColor;
            case 'light' : return props.theme.light.secondBackgroundColor;
            default : return "#000";
        }
    }};
    &:hover{
        background-color:
        ${ props =>{
            switch(props.currentTheme){
                case 'colored' : return "#2700eb";
                case 'dark' : return "#d80049";
                case 'light' : return "#ffe9e5";
                default : return "#000";
            }
        }};
    }
`
export const Image = styled.img`
    width:150px;
    background-size: auto auto;
`

export const PostInfo = styled.div`
    margin-left :1em
`

export const PostTitle = styled.h2`
    margin: 0;
`

export const PostDescription = styled.p`
    margin:1em 0 .5em 0;
    max-height:60px;
    overflow:hidden
`

export const PostDate = styled.p`
    font-style: italic;
    font-size:12px;
    margin:0;
`