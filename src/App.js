import React from 'react';
import './App.css';
import { IconContext } from "react-icons"
import styled from "styled-components"
import { ThemeProvider } from "./ThemeContext"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Nav from "./components/nav"
import Screen from "./components/screen"
import Technologies from "./components/technologies"
import Experience from "./components/experience"
import Footer from "./components/footer"
import Contact from "./components/contact"
import Blog from "./components/blog"
import BlogDetails from "./components/blogDetails"


function App() { 

const Container = styled.div`
  margin : 0 auto;
  max-width: 80%
`;
  
  return (
    <>
      <Router>
        <ThemeProvider>
          <IconContext.Provider value={{color:"#FF0055" , size:"2rem"}}>
            <Container>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/blog/:slug" component={BlogDetails} />
              </Switch>
            </Container>
          </IconContext.Provider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export function Home(){
  return(
    <>
      <Nav />
      <Screen />
      <Technologies />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
