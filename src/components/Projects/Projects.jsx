// import React from 'react';
import {  FaGithub, FaLink } from 'react-icons/fa';
import {  GrShare } from 'react-icons/gr';
// import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <div id='projects' className='px-7 md:py-14 bg-slate-900 '>
            <h1 className="text-4xl md:text-5xl text-center font-bold mb-10 mt-10 text-white">My <span className='text-cyan-400'>Projects</span></h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className="card  bg-slate-800  hover:shadow-lg hover:shadow-cyan-400 shadow-xl">
  <figure>
  <img className='h-60 w-full' src="https://i.ibb.co/mHKrfky/Screenshot-2023-11-08-181610.png" alt="" />
  </figure>
  <h2 className="card-title text-white mt-2 ms-4 font-bold">Tasty Food</h2>
  <div className="card-body">
    <div>
    <div className='flex gap-5 text-cyan-400 font-bold'>
    <div>
    <a title='Client side' className='text-2xl flex  justify-center' href="https://github.com/MasudBhuiya/tasty-foods-client" target='blank'><FaGithub></FaGithub></a>
    <p>Client Side</p>
    </div>
    <div>
    <a title='Server Side' className='text-2xl flex  justify-center' href="https://github.com/MasudBhuiya/tasty-food-server" target='blank'><FaLink></FaLink></a>
    <p>Server Side</p>
    </div>
    <div className=''>
    <a className='text-2xl flex  justify-center' href="https://654c6adb77617b348e0c3155--endearing-nougat-e9210e.netlify.app/Register" title='Live Link' target='blank'><GrShare></GrShare></a>
    <p>Live Link</p>
    </div>
    </div>
    {/* <div> */}
      {/* <Link >Click to Details</Link> */}
      {/* <button id="openModalButton" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Open Modal</button>
    </div> */}
    </div>
  </div>
</div>
            <div className="card bg-slate-800  hover:shadow-lg hover:shadow-cyan-400 shadow-xl">
  <figure>
  <img className='h-60 w-full' src="https://i.ibb.co/5YzwYLg/Screenshot-2023-07-04-123745.png" alt="" />
  </figure>
  <h2 className="card-title mt-2 ms-4  text-white font-bold">Toy Zone</h2>
  <div className="card-body">
    <div>
    <div className='flex gap-5 text-cyan-400 font-bold'>
    <div>
    <a title='Client side' className='text-2xl flex  justify-center' href="https://github.com/MasudBhuiya/toy-zone-client" target='blank'><FaGithub></FaGithub></a>
    <p>Client Side</p>
    </div>
    <div>
    <a title='Server Side' className='text-2xl flex  justify-center' href="https://github.com/MasudBhuiya/toy-zone-server" target='blank'><FaLink></FaLink></a>
    <p>Server Side</p>
    </div>
    <div className=''>
    <a className='text-2xl flex  justify-center' href="https://assignment-11-8fe27.web.app/" title='Live Link' target='blank'><GrShare></GrShare></a>
    <p>Live Link</p>
    </div>
    </div>
    {/* <div> */}
      {/* <Link >Click to Details</Link> */}
      {/* <button id="openModalButton" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Open Modal</button>
    </div> */}
    </div>
  </div>
</div>
<div className="card bg-slate-800  hover:shadow-lg hover:shadow-cyan-400  shadow-xl">
  <figure>
  <img className='h-60 w-full' src="https://i.ibb.co/RSV7Fzr/music.png" alt="" />
  </figure>
  <h2 className="card-title mt-2 ms-4 text-white font-bold">Music Theory</h2>
  <div className="card-body">
    <div>
    <div className='flex gap-5 text-cyan-400 font-bold'>
    <div>
    <a title='Client side' className='text-2xl flex  justify-center' href="https://github.com/MasudBhuiya/music-theory-client" target='blank'><FaGithub></FaGithub></a>
    <p>Client Side</p>
    </div>
    <div>
    <a title='Server Side' className='text-2xl flex  justify-center' href="https://github.com/MasudBhuiya/music-theory-server" target='blank'><FaLink></FaLink></a>
    <p>Server Side</p>
    </div>
    <div className=''>
    <a className='text-2xl flex  justify-center' href="https://assignment-twelve-4cd81.web.app/" title='Live Link' target='blank'><GrShare></GrShare></a>
    <p>Live Link</p>
    </div>
    </div>
    {/* <div> */}
      {/* <Link >Click to Details</Link> */}
      {/* <button id="openModalButton" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Open Modal</button>
    </div> */}
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Projects;