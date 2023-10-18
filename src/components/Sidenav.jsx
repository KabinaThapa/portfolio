import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineProject, AiOutlineContacts, AiOutlineMenu } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

const Sidenav = ({scrollToOffset}) => {
  const[nav,setNav]=useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }

  return (
    
    <div>
    {nav ? (<h1 onClick={handleNav} className='absolute top-4 left-4  md:hidden z-[60] text-white text-xl' >X</h1>):( <AiOutlineMenu onClick={handleNav} className='absolute top-4 left-4 z-50 text-xl  md:hidden  text-white' />)}
    {
      nav ? (
        <div className= 'div fixed w-[50%] mx-auto h-screen flex-col flex justify-center items-center md:mr-4  z-50  backdrop-blur-lg'>
          <button onClick={() => scrollToOffset(0)} className=" w-3/4 flex justify-center items-center  border rounded-xl ml-4  mr-4 mb-4 bg-slate-200 p-1 shadow-lg shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-200">
         
            <AiOutlineHome size={20}/>
            <span className='pl-2 '> Home</span>
          </button>
          <button onClick={() => scrollToOffset(1)} className=" w-3/4 flex justify-center items-center  border rounded-xl ml-4  mr-4 mb-4 bg-slate-200 p-1 shadow-lg shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineProject size={20}/>
            <span className='pl-2'> Projects</span>
          </button>
          <button onClick={() => scrollToOffset(2)} className=" w-3/4 flex justify-center items-center  border rounded-xl ml-4  mr-4 mb-4 bg-slate-200 p-1 shadow-lg shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-200">
            <BsPerson size={20}/>
            <span className='pl-2'> Resume</span>
          </button>
          <button onClick={() => scrollToOffset(6)} className=" w-3/4 flex justify-center items-center  border rounded-xl ml-4  mr-4 mb-4 bg-slate-200 p-1 shadow-lg shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineContacts size={20}/>
            <span className='pl-2'>Contact</span>
          </button>
           
        </div>
      )
      :( 
        ''
      )
    }
    <div className='md:block hidden bg-slate-400  '> 
      <div className='flex flex-col fixed top-1/4 z-30'>
        <button onClick={() => scrollToOffset(0)} className='relative group border-1 flex justify-center  items-center rounded-full lg:p-4 md:p-2 m-2 bg-slate-100 shadow-md shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-200'> 
        <AiOutlineHome size={25 } />
        <span className="absolute bg-slate-100 left-16 rounded-md  opacity-0  p-2 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
    Home
  </span>
        </button >
        <button onClick={() => scrollToOffset(1)} className='group border-1 flex justify-center items-center rounded-full lg:p-4 md:p-2 m-2 bg-slate-100 shadow-md shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-200'> <AiOutlineProject size={25}/>
        <span className="absolute bg-slate-100 left-16 rounded-md  opacity-0  p-2 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
    Projects
  </span></button >
        <button onClick={() => scrollToOffset(2)} className=' group border-1 flex justify-center items-center  rounded-full lg:p-4 md:p-2 m-2 bg-slate-100 shadow-md shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-200'> <BsPerson size={25}/>
        <span className="absolute bg-slate-100 left-16 rounded-md  opacity-0  p-2 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
    Resume
  </span></button >
        <button onClick={() => scrollToOffset(5)} className='group border-1 flex justify-center items-center rounded-full lg:p-4 md:p-2 m-2 bg-slate-100 shadow-md shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-200'> <AiOutlineContacts size={25}/>
        <span className="absolute bg-slate-100 left-16 rounded-md  opacity-0  p-2 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
    Contact
  </span></button >

      </div>
    </div>
    
</div>
  );
};

export default Sidenav;
