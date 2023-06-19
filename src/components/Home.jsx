import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import potrait from '../images/Potrait.jpg'

const Home = () => {
  return (
    <div id="Home">
      <div className="mainBox flex flex-col max-w-full h-screen justify-between bg-slate-300  pr-4 pt-12 pb-12 items-center md:ml-20 md:mr-20 md:flex-row">
        <header className="introBox max-w-[600px] w-full ml-4 mr-4 flex flex-col bg-slate-400 justify-center mt-12 items-center md:items-start md:mr-4 ">
          <h1 className="font-bold lg:text-[3rem] text-[1.5rem] mb-2 pt-2 text-center ">I'm Kabina Thapa</h1>
          <h2 className=" lg:text-[2rem] text-[1rem] text-gray-600 text-center md:text-left md:flex">
            {" "}
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "UI/UX Designer",
                1000,
                "Artist",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
              cursor={true}
            />
          </h2>
          <div className="logos flex justify-between max-w-[250px] w-full mt-2  p-1 bg-slate-500">
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
      <div className=" max-w-[600px] w-full md:h-screen md:m-0 bg-slate-600 mt-2 md:mr-2 mb-8">
        <img className="md:h-full" src={potrait}/>
      </div>
      
      </div>
    </div>
  );
};

export default Home;
