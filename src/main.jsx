import React from 'react'

import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'
import Sidenav from './components/sidenav.jsx'
import MouseGlowEffect from './components/MouseGlow'

import ThreeScene from './components/three'
import App from './App.jsx'



  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <App/>
    
  </React.StrictMode>,
)
