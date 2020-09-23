import styled from 'styled-components'


export const TitleOne = styled.h1`
    color: "red";
    text-align:center;
    margin:0;
`


export const ExpList = styled.div`
    background-color: "blue";
`

export const ExpTitle = styled.h2`
`
export const ExpDescription = styled.p`
    font-size:18;
`
export const ExpDate = styled.p`
    font-style: italic;
`

export const Exp = styled.div`
    background-color: ${ props =>{
        switch(props.currentTheme){
            case 'colored' : return props.theme.colored.secondBackgroundColor;
            case 'dark' : return props.theme.dark.secondBackgroundColor;
            case 'light' : return props.theme.light.secondBackgroundColor;
            default : return "#000";
        }
    }};
    padding: 1em 2em;
    border-radius:8px;
    margin: 1em 0;
    overflow:hidden;
    transition: background-color .4s;
    &:hover{
        background-color:
        ${ props =>{
            switch(props.currentTheme){
                case 'colored' : return "#2700eb";
                case 'dark' : return "#e52500";
                case 'light' : return "#ffe9e5";
                default : return "#000";
            }
        }};
    }
`