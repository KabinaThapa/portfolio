import React from 'react'

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Contact = () => {
  const emailAddress='thapakabina28@gmail.com'
  return (
    <>
    <div id="Contact" className='w-full  flex flex-col mx-auto  pl-4 pr-4 bg-black bg-opacity-50 h-screen text-slate-200  md:pl-16 md:pr-16'>
   
      <div className='font-inter flex flex-col items-center justify-center w-full h-full md:text-2xl text-xl gap-4'>
      <h1 className='text-center md:text-4xl text-3xl font-semibold mt-10'>Contact</h1>
      
      <h2>Get in touch with me via social media</h2>
      <div className="logos flex justify-evenly mx-auto md:w-38  w-20 md:mx-0 text-slate-100 ">
           
            <a href=' https://github.com/KabinaThapa' className="">
              <FaGithub size={25}  />
            </a>
            <a href='https://www.linkedin.com/in/kabina-thapa' className="">
              <FaLinkedin size={25}  />
            </a>
          </div>
      <h1>OR</h1>
      <h1>Directly Email me at </h1>
      <a href={`mailto:${emailAddress}`} className='underline text-blue-400'>{emailAddress} </a>
      </div>
       
    </div>
    </>
  )
}

export default Contact