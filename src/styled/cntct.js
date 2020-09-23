import styled from 'styled-components'


export const Container = styled.div`
    margin: 4em 0;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

`

export const Title = styled.h1`
    margin:0;
`

export const Paragraph = styled.p``

export const Important = styled.span`
    font-weight: bolder;
    &:hover{
        color:${ props =>{
            switch(props.currentTheme){
                case 'colored' : return props.theme.colored.secondTextColor;
                case 'dark' : return props.theme.dark.secondTextColor;
                case 'light' : return props.theme.light.secondTextColor;
                default : return "#000";
            }
        }}
    }

`
