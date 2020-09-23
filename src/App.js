import React from 'react';
import './App.css';
import { IconContext } from "react-icons"
import styled from "styled-components"

import { ThemeProvider } from "./ThemeContext"

import Nav from "./components/nav"
import Screen from "./components/screen"
import Technologies from "./components/technologies"
import Experience from "./components/experience"
import Footer from "./components/footer"
import Contact from "./components/contact"


function App() { 

const Container = styled.div`
  margin : 0 auto;
  max-width: 80%
`;
  
  return (
    <>
      <ThemeProvider>
        <IconContext.Provider value={{color:"#ff2a00" , size:"2rem"}}>
          <Container>
            <Nav />
            <Screen />
            <Technologies />
            <Experience />
            <Contact />
            <Footer />
          </Container>
        </IconContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
