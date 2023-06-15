import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import potrait from '../images/Potrait.jpg'

const Home = () => {
  return (
    <div id="Home">
      <div className="mainBox flex flex-col max-w-full h-screen justify-center bg-slate-300 pl-4 pr-4 pt-12 pb-12 items-center md:ml-12 md:mr-12 md:flex-row">
        <header className="introBox max-w-[350px] w-full flex flex-col bg-slate-400 justify-center mt-12 items-center md:items-start md:mr-4 ">
          <h1 className="font-bold text-4xl mb-2 pt-2 text-center ">I'm Kabina Thapa</h1>
          <h2 className=" md:text-2xl text-[20px] text-gray-600 text-center md:text-left md:flex">
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
          <div className="logos flex justify-between max-w-[150px] w-full mt-2 mb-4 p-1 bg-slate-500">
            <a className="pr-3">
              <FaTwitter size={20} />
            </a>
            <a className="pr-3">
              <FaFacebook size={20} />
            </a>
            <a className="pr-3">
              <FaInstagram size={20} />
            </a>
            <a className="pr-3">
              <FaLinkedin size={20} />
            </a>
          </div>
        </header>
      <div className=" max-w-[350px] w-full md:h-screen bg-slate-600 mt-2 md:mr-6">
        <img className="md:h-full" src={potrait}/>
      </div>
      
      </div>
    </div>
  );
};

export default Home;
