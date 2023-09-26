import React, {useState} from 'react'
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineContacts} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'

//Sidenav arrow function handles nav, initially setNav is not rendered. setNav is called when the 
//Aioutlinemenu is clicked.
const Sidenav = () => {
    const[nav,setNav]=useState(false)
    const handleNav=()=>{
      setNav(!nav)
    }

  return (
    <div>
        <AiOutlineMenu size={22}
        onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden ' />
        {
          nav ? (
            <div className= 'fixed w-full h-screen flex-col flex justify-center items-center md:mr-4'>
              <Link to="/" className=" w-3/4 flex justify-center items-center  border rounded-xl ml-4  mr-4 mb-4 bg-slate-200 p-1 shadow-lg shadow-gray-300 cursor-pointer hover:scale-110 ease-in duration-200">
             
                <AiOutlineHome size={20}/>
                <span className='pl-2 '> Home</span>
              </Link>
              <Link to="/Projects" className=" w-3/4 flex justify-center items-center  border rounded-xl ml-4  mr-4 mb-4 bg-slate-200 p-1 shadow-lg shadow-gray-500 cursor-pointer hover:scale-110 ease-in duration-200">
                <AiOutlineProject size={20}/>
                <span className='pl-2'> Projects</span>
              </Link>
              <Link to ="/Resume" className=" w-3/4 flex justify-center items-center  border rounded-xl ml-4  mr-4 mb-4 bg-slate-200 p-1 shadow-lg shadow-gray-300 cursor-pointer hover:scale-110 ease-in duration-200">
                <BsPerson size={20}/>
                <span className='pl-2'> Resume</span>
              </Link>
              <Link to="/Contact" className=" w-3/4 flex justify-center items-center  border rounded-xl ml-4  mr-4 mb-4 bg-slate-200 p-1 shadow-lg shadow-gray-300 cursor-pointer hover:scale-110 ease-in duration-200">
                <AiOutlineContacts size={20}/>
                <span className='pl-2'>Contact</span>
              </Link>
               
            </div>
          )
          :( 
            ''
          )
        }
        <div className='md:block hidden bg-slate-400'> 
          <div className='flex flex-col fixed top-1/4'>
            <Link to="/" className='relative group border-1 flex justify-center  items-center rounded-full lg:p-4 md:p-2 m-2 bg-slate-100 shadow-md shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-200'> 
            <AiOutlineHome size={25 } />
            <span className="absolute bg-slate-100 left-16 rounded-md  opacity-0  p-2 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
        Home
      </span>
            </Link>
            <Link to="/Projects" className='group border-1 flex justify-center items-center rounded-full lg:p-4 md:p-2 m-2 bg-slate-100 shadow-md shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-200'> <AiOutlineProject size={25}/>
            <span className="absolute bg-slate-100 left-16 rounded-md  opacity-0  p-2 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
        Projects
      </span></Link>
            <Link to="/Resume" className=' group border-1 flex justify-center items-center  rounded-full lg:p-4 md:p-2 m-2 bg-slate-100 shadow-md shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-200'> <BsPerson size={25}/>
            <span className="absolute bg-slate-100 left-16 rounded-md  opacity-0  p-2 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
        Resume
      </span></Link>
            <Link to="/Contact" className='group border-1 flex justify-center items-center rounded-full lg:p-4 md:p-2 m-2 bg-slate-100 shadow-md shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-200'> <AiOutlineContacts size={25}/>
            <span className="absolute bg-slate-100 left-16 rounded-md  opacity-0  p-2 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
        Contact
      </span></Link>

          </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Sidenav