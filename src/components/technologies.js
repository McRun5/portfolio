import React from 'react'
import { Container, TitleOne, Indice, TechContainer } from '../styled/techs'
import { motion } from 'framer-motion'
import '../App.css'

const Technologies = () => {

    const Techs = [
        {
            id:0,
            title: "PHP"
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
            title: "ReactJs"
        },
        {
            id:6,
            title: "Framer motion"
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
        },
        {
            id:13,
            title: "Java"
        }
    ]
    const [hovered, setHovered] = React.useState(false)

    return (
        <Container>
            <TitleOne onMouseEnter={()=>setHovered(!hovered)} onMouseLeave={()=>setHovered(!hovered)}>
                Technologies <span role="img" aria-label="marteau">💻</span>
            </TitleOne>
            <TechContainer 
            drag="x"
            dragConstraints={{ left: -200, right: 200 }}
            dragElastic={0.2}
            >
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
            <Indice>
                drag <span role="img" aria-label="arrow">⬆️</span>
            </Indice>
        </Container>
    )
}

export default Technologies;