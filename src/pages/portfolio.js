import React,{ useEffect } from "react";
import AboutMe from "../components/aboutMe";
import Home from "../components/home";
import Navbar from "../components/navBar";
import Projects from "../components/projects";
import Skills from "../components/skills";


const Portfolio = (props)=>{

    return(<>
    <Navbar></Navbar>
    <Home></Home>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Projects></Projects>
    </>)
}


export default Portfolio;