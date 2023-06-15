import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'

const router=createBrowserRouter([{
  path:'/',
  element:<root/>,
 
children :[
{
path:'/Home',
element:<Home />
},
{
path:'/Contact',
element:<Contact/>
},
{
  path:'/Projects',
  element:<Projects/>
  },
  {
    path:'/Resume',
    element:<Resume/>
    },
  ],
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
