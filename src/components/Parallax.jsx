import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Resume from './Resume';
import Project from './Project';
import Contact from './Contact';
import Home from './Home';
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineContacts} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import Sidenav from './Sidenav';

const ParallaxScroll = () => {
 
  const parallaxRef = useRef(null);

  // Function to scroll to a specific offset
  const scrollToOffset = (offset) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
  };

  return (
    <>
   <Sidenav scrollToOffset={scrollToOffset}/>
  
    <div>
     

      <Parallax ref={parallaxRef} pages={5} className='w-full'>
        
        <ParallaxLayer offset={0} speed={1}  >
          <Home />
        </ParallaxLayer>
       
       
        <ParallaxLayer offset={1} speed={1}>
          <Project />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <Resume />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
    </>
  );
};

export default ParallaxScroll;
