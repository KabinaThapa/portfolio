import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";




const Home = () => {
  return (
    <>
   
    
    <div className=" font-roboto  flex flex-col justify-center   space-y-2 p-2 h-full md:bg-transparent md:w-[28%] md:h-auto  w-full md:absolute  top-[50%]  fixed  md:left-[30%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] " id="Home">
     
      <div className="mainBox  flex   justify-center w-full  p-2  ">
        <header className="introBox  w-full  flex flex-col  md:items-start">
          <h1 className=" text-4xl text-white font-semibold">Hi !</h1>
          <h1 className=" lg:text-3xl  text-2xl  mb-2 pt-2  text-white font-medium ">I'm Kabina Thapa</h1>
          <h2 className=" lg:text-2xl text-lg text-gray-400 flex  md:text-left font-light">
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
     
       
      <div className="logos flex justify-between w-16  md:w-20 md:text-2xl text-xl md:mx-0 text-slate-100  pl-2 ">
      <a href=' https://github.com/KabinaThapa' className="hover:md:text-3xl hover:border hover:p-1 rounded-full border-orange-500">
              <FaGithub   />
            </a>
            <a href='https://www.linkedin.com/in/kabina-thapa' className="hover:md:text-3xl  hover:border hover:p-1 border-orange-500">
              <FaLinkedin   />
            </a>
          </div>
     
    </div>
    </>
     
  );
};

export default Home;
