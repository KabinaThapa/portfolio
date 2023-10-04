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
    <div className=" flex justify-center items-center w-full  p-2 ">
     
      <div className="mainBox  flex flex-col  justify-between w-full ">
        <header className="introBox  w-full ml-4 mr-4 flex flex-col  justify-center mt-12 items-center md:items-start md:mr-4">
          <h1 className="text-4xl">Hi !</h1>
          <h1 className="font-bold lg:text-3xl text-[1.5rem] mb-2 pt-2 text-center ">I'm Kabina Thapa</h1>
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
          <div className="logos flex justify-between max-w-[250px] w-full mt-2  p-1 ">
            <a className="pr-3">
              <FaTwitter size={25} />
            </a>
            <a className="pr-3">
              <FaFacebook size={25} />
            </a>
            <a className="pr-3">
              <FaInstagram size={25} />
            </a>
            <a className="pr-3">
              <FaLinkedin size={25} />
            </a>
          </div>
        </header>
    
      
      </div>
     
       
       
     
    </div>
     
  );
};

export default Home;
