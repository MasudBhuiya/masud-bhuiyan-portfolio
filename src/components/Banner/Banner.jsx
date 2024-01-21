// import React from 'react';
// import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, } from "react-icons/fa";

const Banner = () => {
    return (
        <div id="banner" className="py-5 w-full md:py-10">
  <div className="md:flex p-7 md:justify-between">
    <div className=" md:w-[30%] md:order-1">
        <img className=" rounded-e-full shadow-xl border-8 border-cyan-400 shadow-cyan-600 hover:shadow-2xl hover:shadow-cyan-600 rounded-b-full h-[300px]" src="https://i.ibb.co/ckVML4T/profile.png" alt="" />
            
    </div>
    
    <div className="md:w-[55%]">
            <h3 className="text-gray-400 text-3xl">Hi! I'm</h3>
            <h1 className="text-white text-4xl font-bold">Masud Bhuiyan</h1>
            <div className="text-cyan-400  h-16 md:h-10  mt-2 font-semibold">
            <TypeAnimation className="text-xl"
  sequence={[
    'Full Stack Developer',
    1000,
    'Frontend Web Developer',
    1000,
    'MERN Stack Developer',
    1000,
  ]}
  speed={70}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
            </div>
            <p className="text-gray-200">Welcome to my portfolio! I'm a passionate MERN stack web developer with expertise in HTML, CSS, JavaScript, React, Express.js, Node.js, and MongoDB. With a strong foundation in front-end development, I strive to create captivating user interfaces and seamless user experiences. I enjoy turning ideas into functional and visually appealing websites and web applications.</p>
            <a href="https://drive.google.com/file/d/1dO0n96q7qFAmjaAnAr9dCgFX6L-dS5Md/view" target="blank"><button className="btn bg-cyan-500 border-0 hover:bg-cyan-700 mt-3 text-white">My Resume</button></a>
            <div className="flex gap-5 mt-8">
                     <a className="text-3xl text-cyan-500" href="https://www.facebook.com/masudbhuiyan1415/" target="blank"><FaFacebook></FaFacebook></a>
                     <a className="text-3xl text-cyan-500" href="https://twitter.com/MasudBhuiy1415" target="blank"><FaTwitter></FaTwitter></a>
                     <a className="text-3xl text-cyan-500" href="https://www.linkedin.com/in/masud-rana-959561278/" target="blank"><FaLinkedinIn></FaLinkedinIn></a>
                     <a className="text-3xl text-cyan-500" href="https://github.com/MasudBhuiya" target="blank"><FaGithub></FaGithub></a>
                     </div>
            </div>
    </div>
  </div>
    );
};

export default Banner;

