// import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
    <li><a href='#about'><p className="hover:text-blue-500 text-lg">About</p></a></li>
    <li><a href='#skills'><p className="hover:text-blue-500 text-lg">Skills</p></a></li>
    <li><a href='#projects'><p className="hover:text-blue-500 text-lg">Projects</p></a></li>
    <li><a href='#teamprojects'><p className="hover:text-blue-500 text-lg">Team Projects</p></a></li>
    <li><a href='#contact'><p className="hover:text-blue-500 text-lg">Contact</p></a></li>
    {/* <li><Link to='#about'><p className="hover:text-blue-500 text-lg">About</p></Link></li>
    <li><Link to='#skills'><p className="hover:text-blue-500 text-lg">Skills</p></Link></li>
    <li><Link to='#projects'><p className="hover:text-blue-500 text-lg">Projects</p></Link></li>
    <li><Link to='#contact'><p className="hover:text-blue-500 text-lg">Contact</p></Link></li> */}
  </>
    return (
        <div className="max-w-screen-2xl mx-auto">
          <div className="navbar mx-auto p-6  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content  ps-20 shadow bg-base-100 rounded-box -mt-20 w-64">
        {navItems}
      </ul>
    </div>
    <Link to='/' className=" normal-case text-3xl font-semibold ms-3 text-white">
        <h1>MASUD BHUIYAN</h1>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex w-fit mx-auto me-7 text-white">

{/* hello world */}

    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
</div> 
        </div>
    );
};

export default Navbar;