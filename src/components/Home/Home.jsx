// import React from 'react';

import { useEffect } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from "../../App";
import Particle from "../Particle";
import './Home.css';
import TeamProjects from "../TeamProjects/TeamProjects";

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function for animations
          once: true, // Whether the animation should occur only once
        });
      }, []);
    return (
        <>
            <div data-aos="zoom-in"><Navbar></Navbar></div>
        <div className="bg-slate-900 max-w-screen-2xl mx-auto ">
            <div data-aos="zoom-in"><Banner></Banner></div>
            <div data-aos="zoom-in"><About></About></div>
            <div data-aos="zoom-in"><Skills></Skills></div>
            <div data-aos="zoom-in"><Projects></Projects></div>
            <div data-aos="zoom-in"><TeamProjects></TeamProjects></div>
            <div data-aos="zoom-in"><Contact></Contact></div>
        </div>
            <div ><Footer></Footer></div>
        </>
    );
};

export default Home;