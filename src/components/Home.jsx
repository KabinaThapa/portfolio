import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div id="Home">
      <div className="mainBox flex flex-col justify-center items-center w-full h-screen bg-slate-300 md:flex-row">
        <div className="introBox max-w-[350px] w-full  bg-slate-400  flex flex-col justify-center">
          <h1 className="font-bold text-4xl mb-4">I'm Kabina Thapa</h1>
          <h2 className="flex text-2xl text-gray-800">
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
          <div className="logos flex justify-between max-w-[150px] mt-4 pb-1">
            <a>
              <FaTwitter size={20} />
            </a>
            <a>
              <FaFacebook size={20} />
            </a>
            <a>
              <FaInstagram size={20} />
            </a>
            <a>
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      <div className=" max-w-[350px] w-full h-[10rem] bg-slate-600 mt-5 ">f</div>
      </div>
    </div>
  );
};

export default Home;
