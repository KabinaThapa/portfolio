import React from 'react'
import Resume from './Resume'
import { Parallax,ParallaxLayer } from '@react-spring/parallax'
import Project from './Project'
import Contact from './Contact'
import ThreeScene from './three'
import Home from './Home'
import{HiOutlineClipboardDocumentList} from 'react-icons/hi2'
const ParallaxScroll = () => {
  return (
    <Parallax pages={4}>
      <ParallaxLayer 
        offset={0.2}
        speed={0.05}
        
        style={{position:'absolute', top:'1rem', left:'12rem'}}>
          
          <Home/>
           
        </ParallaxLayer>
        
        
      
        <ParallaxLayer 
        offset={1}
        speed={1}
        factor={0} >
          <Resume/>
            
        </ParallaxLayer>
        <ParallaxLayer 
        offset={2}
        speed={2.5}
        factor={2}>
          <Project/>
            
        </ParallaxLayer>
        <ParallaxLayer 
        offset={3}
        speed={2.5}
        >
          <Contact/>
            
        </ParallaxLayer>
    </Parallax>
  )
}

export default ParallaxScroll