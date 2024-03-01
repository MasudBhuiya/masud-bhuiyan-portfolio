import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { GrShare } from 'react-icons/gr';
const TeamProjects = () => {
  return (
    <div id='teamprojects' className='px-5 md:py-14 '>
      <h1 className="text-4xl md:text-5xl text-center font-bold mb-10 mt-10 text-white">Team <span className='text-cyan-400'>Projects</span></h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>

        <div className="card bg-slate-800  hover:shadow-lg hover:shadow-cyan-400 shadow-xl">
          <figure>
            <img className='h-60 w-full' src="https://i.ibb.co/bv3rm3W/bus-ticket-3.png" alt="" />
          </figure>
          <h2 className="card-title mt-2 ms-4  text-white font-bold">Dhaka Bus Ticket</h2>
          <div className="card-body">
            <div>
              <div className='flex gap-5 text-cyan-400 font-bold'>
                <div>
                  <a title='Client side' className='text-2xl flex  justify-center' href="https://github.com/ashiqur-r-biplop/Dhaka-Bus-Ticket/tree/development" target='blank'><FaGithub></FaGithub></a>
                  <p>Client Side</p>
                </div>
                <div>
                  <a title='Server Side' className='text-2xl flex  justify-center' href="https://github.com/Abdullah-Al-Akash/Dhaka-Bus-Ticket-Server/tree/development" target='blank'><FaLink></FaLink></a>
                  <p>Server Side</p>
                </div>
                <div className=''>
                  <a className='text-2xl flex  justify-center' href="https://dhaka-bus-ticket1.netlify.app/" title='Live Link' target='blank'><GrShare></GrShare></a>
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
            <img className='h-60 w-full' src="https://i.ibb.co/8bnF1H8/Screenshot-2024-02-15-152128.png" alt="" />
          </figure>
          <h2 className="card-title mt-2 ms-4  text-white font-bold">Job Box</h2>
          <div className="card-body">
            <div>
              <div className='flex gap-5 text-cyan-400 font-bold'>
                <div>
                  <a title='Client side' className='text-2xl flex  justify-center' href="https://github.com/ashiqur-r-biplop/Job_Box" target='blank'><FaGithub></FaGithub></a>
                  <p>Client Side</p>
                </div>
                <div>
                  <a title='Server Side' className='text-2xl flex  justify-center' href="https://github.com/ashiqur-r-biplop/job-portal-server" target='blank'><FaLink></FaLink></a>
                  <p>Server Side</p>
                </div>
                <div className=''>
                  <a className='text-2xl flex  justify-center' href="https://65cdd648b0b0eb8b8c4fad77--luminous-syrniki-ad29e6.netlify.app/" title='Live Link' target='blank'><GrShare></GrShare></a>
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

export default TeamProjects;