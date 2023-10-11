import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import potrait from '../images/Potrait.jpg'
import MouseGlowEffect from "./MouseGlow";
import '../main'
import Resume from "./Resume";
import ThreeScene from "./three";



const Home = () => {
  return (
    <>
   
    
    <div className=" flex flex-col justify-center  space-y-6  p-2 bg-white bg-opacity-25 md:bg-transparent md:w-[28%]  w-[75%] md:absolute md:top-[12rem] md:left-[24rem] fixed top-[20rem] left-[50%] transform translate-x-[-50%] " id="Home">
     
      <div className="mainBox  flex   justify-center w-full ">
        <header className="introBox  w-full  flex flex-col  justify-center mt-12 items-center md:items-start ">
          <h1 className="md:text-4xl text-2xl">Hi !</h1>
          <h1 className="font-bold lg:text-3xl  mb-2 pt-2 text-center ">I'm Kabina Thapa</h1>
          <h2 className=" lg:text-2xl text-[1rem] text-gray-600 text-center md:text-left md:flex">
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
                "also an Artist",
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
     
       
      <div className="logos flex justify-between md:w-[50%] w-[80%]  ">
            <a className="">
              <FaTwitter size={25} />
            </a>
            <a className="">
              <FaFacebook size={25} />
            </a>
            <a className="">
              <FaInstagram size={25} />
            </a>
            <a className="">
              <FaLinkedin size={25} />
            </a>
          </div>
     
    </div>
    </>
     
  );
};

export default Home;
