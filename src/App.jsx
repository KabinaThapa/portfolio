import React, {useEffect} from 'react'

import MouseGlowEffect from './components/MouseGlow'
import Sidenav from './components/Sidenav'
import ThreeScene from './components/three'

import './App.css'

function App ()  {
  useEffect(() => {
    // Define the function to check window height changes
    let lastHeight = window.innerHeight;

    function checkWindowHeight() {
      const newHeight = window.innerHeight;
      if (newHeight !== lastHeight) {
        // Window height has changed, indicating the address bar is hidden or shown.
        // Perform any necessary adjustments to your layout.
        lastHeight = newHeight;
      }
    }

    // Check for window height changes periodically (e.g., every 500ms).
    const heightCheckInterval = setInterval(checkWindowHeight, 500);

    // Don't forget to clear the interval when the component unmounts.
    return () => {
      clearInterval(heightCheckInterval);
    };
  }, []); 
  return (
    <>
        <MouseGlowEffect/>
  <Sidenav/>
   
   <ThreeScene/>
    
    
 
    
    
   
  
  
    </>
  )
}

export default App