import React from 'react'
import Glamedge from '../assets/glamedge.png'
import Weather from '../assets/weather.png'


const Project = () => {
  return (
    
    <div className='font-inter Project flex flex-col justify-center items-center w-full h-screen bg-black bg-opacity-50 p-[2%] space-y-4 ' id="Projects">
      <h1 className='md:text-4xl text-3xl text-white mt-10 font-semibold'>Recent Projects</h1>
      <div className='grid md:grid-cols-2 md:gap-12 gap-8 md:p-2 w-[85%] grid-cols-1'>
        <div className='p-2 space-y-2 text-center'>
          <h1 className='md:text-2xl text-lg text-white underline'>GlamEdge Ecommerce App</h1>
          <div className='w-full md:h-80   border-black' >
            <img className='object-contain w-full h-full' src={Glamedge}/>
          </div>
          <div className='md:w-[80%] w-[90%] flex mx-auto justify-evenly font-inter'>
          <a href='https://github.com/KabinaThapa/GlamEdge' className=' rounded text-center bg-zinc-200 p-1 md:w-32 w-24  hover:border-b-2 border-orange-500 '>Github</a>
          <a href='https://glam-edge.vercel.app/' className=' rounded text-center bg-zinc-200 p-1 md:w-32 w-24 hover:border-b-2 border-orange-500 '>Live Demo</a>

          </div>
         
        </div>
        <div className=' text-center p-2 space-y-2'>
          <h1 className='md:text-2xl text-xl text-white underline'>Weather App</h1>
         
          <div className='w-full md:h-80   border-black' >
            <img className='object-contain w-full h-full' src={Weather}/>
          </div>
          <div className='md:w-[80%] w-[90%] mx-auto flex justify-evenly font-inter'>
          <a href='https://github.com/KabinaThapa/weather-app' className=' rounded text-center bg-zinc-200 p-1 md:w-32 w-24 hover:border-b-2 border-orange-500'>Github</a>
          <a href=' https://weather-app-kabinathapa.vercel.app/' className=' rounded text-center bg-zinc-200 p-1 md:w-32 w-24 hover:border-b-2 border-orange-500 '>Live Demo</a>

          </div>
        </div>
       
      </div>
    </div>
    
  )
  
}

export default Project