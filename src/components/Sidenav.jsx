import React, {useState} from 'react'
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai'

//Sidenav arrow function handles nav, initially setNav is not rendered. setNav is called when the 
//Aioutlinemenu is clicked.
const Sidenav = () => {
    const[nav,setNav]=useState(false)
    const handleNav=()=>{
      setNav(!nav)
    }

  return (
    <div>
        <AiOutlineMenu
        onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
        {
          nav ? (
            <div className='bg-slate-100 w-full h-screen flex-col border-solid border-8 rounded border-black  flex justify-center'>
              <a href='#'className='flex justify-center'>
                <AiOutlineHome size={20}/>
                <span className='pl-4 '> Home</span>
              </a>
              <a href='#'className='flex justify-center'>
                <AiOutlineHome size={20}/>
                <span className='pl-4'> Projects</span>
              </a>
              <a href='#'className='flex justify-center'>
                <AiOutlineHome size={20}/>
                <span className='pl-4'> Contact</span>
              </a>
              <a href='#'className='flex justify-center'>
                <AiOutlineHome size={20}/>
                <span className='pl-4'> Home</span>
              </a>
               
            </div>
          )
          :( 
            <div></div>
          )
        }
    </div>
  )
}

export default Sidenav