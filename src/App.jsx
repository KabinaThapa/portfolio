import React from 'react'
import Home from './components/Home'
import Sidenav from './components/sidenav'
import Resume from './components/Resume'
import Project from './components/Project'
import Contact from './components/Contact'
import MouseGlowEffect from './components/MouseGlow'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import ThreeScene from './components/three'
import ParallaxScroll from './components/Parallax'
import AnimatedBackground from './components/Parallax'
import './App.css'

function App ()  {
  return (
    <>
    
    <div className='App flex flex-col h-auto '>
        <MouseGlowEffect/>
  <Sidenav/>
   
   <ThreeScene/>
    </div>
    
 
    
    
   
  
  
    </>
  )
}

export default App