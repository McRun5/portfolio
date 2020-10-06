import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    margin : 19 auto;
    padding: 1em 4em;
    margin:2em 0;
    overflow:hidden
`

export const TitleOne = styled.h1`
    text-align:center;
    margin:0;
`

export const TechList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`

export const TechContainer = styled(motion.div)`
    display:flex;
    position: relative;
    align-items:center;
    justify-content: center;
`

export const Button = styled.h2`
    z-index: 2;
    cursor: pointer
`


export const Title = styled.p`
    background-color: rgba(0,0,0,0.2) ;
    padding: 5px 20px;
    border-radius:4px;
    margin: 0 10px;
`
export const Indice = styled.p`
    font-style: italic;
    font-size:14px;
    text-align:center
`