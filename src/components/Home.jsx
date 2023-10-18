import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";




const Home = () => {
  return (
    <>
   
    
    <div className=" flex flex-col justify-center   space-y-6  p-2 bg-black bg-opacity-50 md:bg-transparent md:w-[28%] md:h-auto h-screen  w-full md:absolute md:top-[16rem] md:left-[24rem] fixed top-[0rem] left-[50%] transform translate-x-[-50%] " id="Home">
     
      <div className="mainBox  flex   justify-center w-full  ">
        <header className="introBox  w-full  flex flex-col  md:items-start">
          <h1 className="md:text-4xl text-2xl text-white">Hi !</h1>
          <h1 className="font-semibold lg:text-3xl  text-xl  mb-2 pt-2  text-white ">I'm Kabina Thapa</h1>
          <h2 className=" lg:text-2xl text-sm text-gray-400 flex  md:text-left ">
            {" "}
            I'm
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "a Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "passionate about Front-End",
                1000,
                "learning React and Javascript",
                1000,
                "an Artist",
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
              cursor={true}
            />
          </h2>
         
        </header>
    
      
      </div>
     
       
      <div className="logos flex justify-between  w-[50%] md:mx-0 text-slate-100 ">
            <a className="">
              <FaTwitter size={25} />
            </a>
            <a className="">
              <FaFacebook size={25}  />
            </a>
            <a className="">
              <FaInstagram size={25}  />
            </a>
            <a className="">
              <FaLinkedin size={25}  />
            </a>
          </div>
     
    </div>
    </>
     
  );
};

export default Home;
