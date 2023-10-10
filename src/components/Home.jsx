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
    <div className=" flex flex-col justify-center p-2  md:w-[24%] w-[75%] border md:absolute md:top-[14rem] md:left-[12rem] absolute top-[20rem] left-10 " id="Home">
     
      <div className="mainBox  flex   justify-center w-full border ">
        <header className="introBox  w-full ml-4 mr-4 flex flex-col  justify-center mt-12 items-center md:items-start md:mr-4">
          <h1 className="md:text-4xl text-lg">Hi !</h1>
          <h1 className="font-bold lg:text-3xl  mb-2 pt-2 text-center ">I'm Kabina Thapa</h1>
          <h2 className=" lg:text-2xl text-[1rem] text-gray-600 text-center md:text-left md:flex">
            {" "}
            I'm
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "a Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a UI/UX Designer",
                1000,
                "an Artist",
                1000,
                "a Tech Enthusiast",
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
     
       
      <div className="logos flex justify-between md:max-w-[250px] w-full mt-2  p-1 border">
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
     
  );
};

export default Home;
