import React, {useState} from 'react'
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineContacts} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'

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
        onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden ' />
        {
          nav ? (
            <div className= 'fixed w-full h-screen flex-col flex justify-center items-center'>
              <a href="#Home" className=" w-3/4 flex justify-center items-center  border rounded-xl ml-4  mr-4 mb-4 bg-slate-200 p-1 shadow-lg shadow-gray-300 cursor-pointer hover:scale-110 ease-in duration-200">
             
                <AiOutlineHome size={20}/>
                <span className='pl-2 '> Home</span>
              </a>
              <a href="#Projects" className=" w-3/4 flex justify-center items-center  border rounded-xl ml-4  mr-4 mb-4 bg-slate-200 p-1 shadow-lg shadow-gray-300 cursor-pointer hover:scale-110 ease-in duration-200">
                <AiOutlineProject size={20}/>
                <span className='pl-2'> Projects</span>
              </a>
              <a href="#Resume" className=" w-3/4 flex justify-center items-center  border rounded-xl ml-4  mr-4 mb-4 bg-slate-200 p-1 shadow-lg shadow-gray-300 cursor-pointer hover:scale-110 ease-in duration-200">
                <BsPerson size={20}/>
                <span className='pl-2'> Resume</span>
              </a>
              <a href="#Contact" className=" w-3/4 flex justify-center items-center  border rounded-xl ml-4  mr-4 mb-4 bg-slate-200 p-1 shadow-lg shadow-gray-300 cursor-pointer hover:scale-110 ease-in duration-200">
                <AiOutlineContacts size={20}/>
                <span className='pl-2'>Contact</span>
              </a>
               
            </div>
          )
          :( 
            ''
          )
        }
        <div className='md:block hidden bg-slate-400'> 
          <div className='flex flex-col fixed top-1/4'>
            <a href="#Home" className='border-1 flex justify-center items-center rounded-full p-2 m-2 bg-slate-100 shadow-md shadow-gray-500 cursor-pointer hover:scale-110 ease-in duration-200'> <AiOutlineHome size={20}/></a>
            <a href="#Projects" className='border-1 flex justify-center items-center rounded-full p-2 m-2 bg-slate-100 shadow-md shadow-gray-500 cursor-pointer hover:scale-110 ease-in duration-200'> <AiOutlineProject size={20}/></a>
            <a href="#Resume" className='border-1 flex justify-center items-center  rounded-full p-2 m-2 bg-slate-100 shadow-md shadow-gray-500 cursor-pointer hover:scale-110 ease-in duration-200'> <BsPerson size={20}/></a>
            <a href="#Contact" className='border-1 flex justify-center items-center rounded-full p-2 m-2 bg-slate-100 shadow-md shadow-gray-500 cursor-pointer hover:scale-110 ease-in duration-200'> <AiOutlineContacts size={20}/></a>

          </div>
        </div>
    </div>
  )
}

export default Sidenav