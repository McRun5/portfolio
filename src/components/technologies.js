import React from 'react'
import { Container, TitleOne, TechList, Button, Title, TechContainer } from '../styled/techs'

const Technologies = () => {


    const Techs = [
        {
            id:-1,
            title: "💪"
        },
        {
            id:0,
            title: "ReactJs"
        },
        {
            id:1,
            title: "HTML"
        },
        {
            id:2,
            title: "CSS"
        },
        {
            id:3,
            title: "React native"
        },
        {
            id:4,
            title: "PHP"
        },
        {
            id:6,
            title: "Java"
        },
        {
            id:7,
            title: "Javascript"
        },
        {
            id:8,
            title: "Styled Components"
        },
        {
            id:9,
            title: "ExpressJs"
        },
        {
            id:10,
            title: "MySQL"
        },
        {
            id:11,
            title: "ML"
        },
        {
            id:12,
            title: "C"
        },{
            id:12,
            title:"👍"
        }
    ]

    const [x, setX] = React.useState(0)

    const prev = () => {
        x>-40? setX(x-10) : setX(x)
    }

    const next = () => {
        x<4 ? setX(x+10) : setX(x)
    }

    return (
        <Container>
            <TitleOne>Technologies <span role="img">💻</span></TitleOne>
            <TechList>
                <Button onClick={()=>prev()}><span role="img">⬅️</span></Button>
                <TechContainer >
                    {
                    Techs.map(t => (
                        <Title onMouseEnter={()=> setX(0)} x={x}> {t.title} </Title>
                    ))
                    }
                </TechContainer>
                <Button onClick={()=>next()}><span role="img">➡️</span></Button>
            </TechList>
        </Container>
    )
}

export default Technologies;