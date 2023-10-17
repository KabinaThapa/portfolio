import React from 'react'
import Glamedge from '../assets/glamedge.png'
import Weather from '../assets/weather.png'


const Project = () => {
  return (
    
    <div className='Project flex flex-col justify-center items-center w-full h-screen bg-black bg-opacity-50 p-[2%] space-y-4 ' id="Projects">
      <h1 className='md:text-3xl text-2xl text-white mt-10'>Recent Projects</h1>
      <div className='grid md:grid-cols-2 md:gap-12 gap-8 md:p-2 w-[85%] grid-cols-1'>
        <div className='p-2 space-y-2 text-center'>
          <h1 className='md:text-2xl text-lg text-white'>GlamEdge Ecommerce App</h1>
          <div className='w-full md:h-80   border-black' >
            <img className='object-contain w-full h-full' src={Glamedge}/>
          </div>
          <div className='md:w-[80%] w-[90%] flex mx-auto justify-evenly'>
          <a href='https://github.com/KabinaThapa/GlamEdge' className=' rounded text-center bg-zinc-200 p-1 md:w-32 w-24'>Github</a>
          <a href='https://glam-edge.vercel.app/' className=' rounded text-center bg-zinc-200 p-1 md:w-32 w-24'>Live Demo</a>

          </div>
         
        </div>
        <div className=' text-center p-2 space-y-2'>
          <h1 className='md:text-2xl text-xl text-white'>Weather App</h1>
         
          <div className='w-full md:h-80   border-black' >
            <img className='object-contain w-full h-full' src={Weather}/>
          </div>
          <div className='md:w-[80%] w-[90%] mx-auto flex justify-evenly'>
          <a href='https://github.com/KabinaThapa/weather-app' className=' rounded text-center bg-zinc-200 p-1 md:w-32 w-24'>Github</a>
          <a href=' https://weather-app-kabinathapa.vercel.app/' className=' rounded text-center bg-zinc-200 p-1 md:w-32 w-24'>Live Demo</a>

          </div>
        </div>
       
      </div>
    </div>
    
  )
  
}

export default Project