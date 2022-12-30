import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className=" w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 pt-16 flex justify-center items-center">
        <div>
          <p className=" uppercase text-sm tracking-widest text-gray-600">
            Let&rsquo;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi I&rsquo;m <span className="text-[#5651e5] font-medium">Ambar</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&rsquo;m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I&rsquo;m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/ambar-srivastava-09b1431bb/"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn className="text-[#5651e5]" size={18} />
              </div>
            </Link>
            <Link target="_blank" href="https://github.com/ambar-srivastava">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub className="text-[#5651e5]" size={18} />
              </div>
            </Link>
            <Link target="_blank" href="mailto:ambar0027coc@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillMail className="text-[#5651e5]" size={18} />
              </div>
            </Link>
            <Link href="tel:7268003088">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill className="text-[#5651e5]" size={18} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
