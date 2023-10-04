import React from 'react'
import Resume from './Resume'
import { Parallax,ParallaxLayer } from '@react-spring/parallax'
import Project from './Project'
import Contact from './Contact'
import ThreeScene from './three'
import Home from './Home'

const ParallaxScroll = () => {
  return (
    <Parallax pages={5}>
      <ParallaxLayer 
        offset={0.2}
        speed={0.05}
        
        style={{position:'absolute', top:'1rem', left:'12rem', border:'2rem'}}>
          
          <Home/>
            
        </ParallaxLayer>
      
        <ParallaxLayer 
        offset={2}
        speed={1}
        factor={0} style={{zIndex:'0'}}>
          <Resume/>
            
        </ParallaxLayer>
        <ParallaxLayer 
        offset={3}
        speed={2.5}
        factor={2}>
          <Project/>
            
        </ParallaxLayer>
        <ParallaxLayer 
        offset={4}
        speed={2.5}
        >
          <Contact/>
            
        </ParallaxLayer>
    </Parallax>
  )
}

export default ParallaxScroll