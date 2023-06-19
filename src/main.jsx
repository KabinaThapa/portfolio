import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,Route,createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'
import Sidenav from './components/sidenav.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Sidenav />}>
       <Route element={<Home/>} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Project" element={<Project />} />
      <Route path="Resume" element={<Resume />} />  
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
