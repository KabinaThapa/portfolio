import React from 'react'
import AnimatedBackground from './Parallax'


const Project = () => {
  return (
    
    <div className='flex flex-col justify-center items-center w-full h-screen bg-white bg-opacity-50 p-[2%] space-y-4 ' id="Projects">
      <h1 className='md:text-3xl text-xl '>Recent projects</h1>
      <div className='grid md:grid-cols-2 md:gap-12 gap-8 md:border md:p-2 w-[85%] grid-cols-1'>
        <div className='border border-black p-2 space-y-2 text-center'>
          <h1 className='md:text-2xl text-lg'>GlamEdge Ecommerce App</h1>
          <div className='w-full md:h-80  border border-black' >
            <img className='object-contain w-full h-full' src={'/src/images/glamedge.png'}/>
          </div>
          <div className='w-full flex justify-around'>
          <a href='https://github.com/KabinaThapa/GlamEdge' className='border rounded text-center bg-zinc-200 p-1 md:w-32 w-28'>Github</a>
          <a href='https://glamedge.vercel.app/' className='border rounded text-center bg-zinc-200 p-1 md:w-32 w-28'>Live Demo</a>

          </div>
         
        </div>
        <div className='border text-center p-2 space-y-2'>
          <h1 className='md:text-2xl text-xl'>Weather App</h1>
         
          <div className='w-full md:h-80  border border-black' >
            <img className='object-contain w-full h-full' src={'/src/images/weather.png'}/>
          </div>
          <div className='w-full flex justify-around'>
          <a href='https://github.com/KabinaThapa/weather-app' className='border rounded text-center bg-zinc-200 p-1 md:w-32 w-28'>Github</a>
          <a href=' https://weather-app-kabinathapa.vercel.app/' className='border rounded text-center bg-zinc-200 p-1 md:w-32 w-28'>Live Demo</a>

          </div>
        </div>
       
      </div>
    </div>
    
  )
  
}

export default Project