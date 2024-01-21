import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
// import Skills from './components/Skills/Skills';
// import About from './components/About/About';
// import Projects from './components/Projects/Projects';
// import Contact from './components/Contact/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-slate-900'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
