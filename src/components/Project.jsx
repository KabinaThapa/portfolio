import React from 'react'
import AnimatedBackground from './Parallax'


const Project = () => {
  return (
    
    <div className='flex flex-col justify-center items-center p-4' id="Projects">
      <h1 className='text-3xl'>Recent projects</h1>
      <div className='grid grid-cols-2 gap-12 border p-2'>
        <div className='border p-2 space-y-2'>
          <h1>GlamEdge Ecommerce App</h1>
          <div className='w-96 h-72 border' >Project pic</div>
          <div className='w-full flex justify-around'>
          <button className='border rounded p-1'>Github</button>
          <button className='border rounded p-1'>Live Demo</button>

          </div>
         
        </div>
        <div className='border'>
          <h1>Weather App</h1>
        </div>
        <div className='border w-96 h-72'>
          <h1>Project 3</h1>
        </div>
        <div className='border'>
          <h1>Project 4</h1>
        </div>
      </div>
    </div>
    
  )
  
}

export default Project