import React from 'react'
import { Container, TitleOne, TechList, TechContainer } from '../styled/techs'
import { motion } from 'framer-motion'
import '../App.css'

const Technologies = () => {

    const Techs = [
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
        }
    ]
    const [hovered, setHovered] = React.useState(false)

    return (
        <Container>
            <TitleOne onMouseEnter={()=>setHovered(!hovered)} onMouseLeave={()=>setHovered(!hovered)}>
                Technologies <span role="img" aria-label="marteau">💻</span>
            </TitleOne>
            <TechList>
                <TechContainer >
                    {
                    Techs.map(t => (
                        <motion.p 
                            className="myTitle"
                            transition={{ type: "spring", stiffness: 100 }}
                            whileHover={{
                                scale: 3,
                                transition: { duration: .1 },
                            }}> 
                          {t.title} 
                        </motion.p>
                    ))
                    }
                </TechContainer>
            </TechList>
        </Container>
    )
}

export default Technologies;