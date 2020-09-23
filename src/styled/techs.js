import styled from 'styled-components'

export const Container = styled.div`
    
    margin : 19 auto;
    padding: 1em 4em;
    margin:2em 0;
`

export const TitleOne = styled.h1`
    text-align:center;
    margin:0;
`

export const TechList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center
`

export const TechContainer = styled.div`
    display:flex;
    fles-direction: row;
    overflow:hidden;
    align-items:center
`

export const Button = styled.h2`
    z-index: 2;
    cursor: pointer
`


export const Title = styled.p`
    background-color: rgba(0,0,0,0.2) ;
    padding: 5px 20px;
    border-radius:4px;
    transition : transform 400ms ease-in-out;
    transform: translateX(${props => (props.x)}em);
    margin: 0 10px;
`