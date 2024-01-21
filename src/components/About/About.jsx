// import React from 'react';

import App from "../../App";

const About = () => {
    return (
        <div id="about" className="md:py-16 bg-slate-900">
           
            <div className="md:flex gap-12 items-center justify-center px-7">
                <div className="md:w-[35%]">
                    <img className="flex items-center w-[380px] shadow-xl border-8 border-cyan-400 shadow-cyan-600 hover:shadow-2xl hover:shadow-cyan-600 rounded-xl justify-center" src="https://i.ibb.co/ckVML4T/profile.png" alt="" />
                </div>
                <div className=" md:w-[65%] ">
                <h1 className="text-4xl md:text-5xl mt-10 md:mt-0 font-bold text-white mb-10 ">About <span className="text-cyan-400">Me</span></h1>
                    <p  className="text-gray-200 mt-6 md:mt-0">Hello, I'm Masud Bhuiyan, a passionate and dedicated <span className="text-red-400">frontend web developer</span>. I am a student of class XII in Salimuddin Chowdhury College, located in Narayangonj, Dhaka. My journey into the world of <span className="text-red-400">programming</span> began when I discovered my love for creating visually appealing and interactive websites.To further enhance my skills, I enrolled in the <span className="text-red-400">"Programming Hero"</span> Course, where I completed the web development curriculum and obtained a certificate. This course provided me with comprehensive knowledge and practical experience, enabling me to tackle real-world projects with confidence. When I'm not coding, you can find me indulging in my hobbies. I am an avid <span className="text-red-400">Video game</span> enthusiast.

I am excited to embark on new projects and collaborate with like-minded individuals. Feel free to browse through my portfolio and <span className="text-red-400">get in touch with me</span> if you have any inquiries or if you'd like to discuss potential opportunities.</p>
                </div>
            </div>
        </div>
    );
};

export default About;