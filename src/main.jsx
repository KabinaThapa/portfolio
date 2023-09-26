import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'
import Sidenav from './components/sidenav.jsx'

const router=createBrowserRouter([
  {
  element:<Sidenav/>,
  children:[
    {
      path:'/',
      element:<Home/>,
      
      
    },
    {
      path:'/Contact',
      element:<Contact/>
    },
    {
      path:'/Projects',
      element:<Project/>
    },
    {
    path:'Resume',
    element:<Resume/>
    },
  
  ],
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
