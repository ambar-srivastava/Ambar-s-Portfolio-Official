import Image from "next/legacy/image";
import React from "react";
import portfolioImg from "../public/assets/projects/portfolio.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

const Portfolio = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-screen h-[35vh] lg:h-[45vh] relative">
        <div className="absolute top-0 left-0 w-full h-[35vh] lg:h-[45vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={portfolioImg}
          alt="/"
        />
        <div className=" absolute top-[75%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
          <h2 className="py-2 font-medium text-4xl text-gray-200">
            Personal Portfolio
          </h2>
          <h3 className=" font--gray-300">React JS / Tailwind / Next JS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 items-center gap-8 pt-8 ">
        <div className=" col-span-4">
          <p className=" uppercase tracking-widest text-[#5651e5] font-medium">
            Project
          </p>
          <h2 className=" text-gray-700 text-3xl my-2">Overview</h2>
          <p className="mb-4 text-sm">
            The portfolio website was created using Next.js, a popular
            JavaScript framework for building server-rendered React
            applications. <br /> <br /> Next.js provides a powerful set of
            features that make it easy to build fast, scalable, and SEO-friendly
            web applications. <br />
            <br /> The website also uses Tailwind CSS, a utility-first CSS
            framework that provides a set of pre-defined CSS classes that can be
            used to quickly style elements on the page. <br />
            <br /> Together, Next.js and Tailwind CSS provide a powerful toolset
            for building high-performance, visually appealing websites that are
            easy to maintain. <br />
            <br /> The portfolio website showcases my projects, skills, and
            experiences. It also has a clean and modern design, making it easy
            for potential clients and employers to navigate and learn more about
            my background and expertise.
          </p>
          <div className="mb-10">
            <Link
              target="_blank"
              href="https://ambar-portfolio-official.vercel.app/"
            >
              <button className=" px-14 py-2 mt-4 mr-8 rounded-md tracking-widest">
                DEMO
              </button>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/ambar-srivastava/Ambar-s-Portfolio-Official.git"
            >
              <button className=" px-14 py-2 mt-4 rounded-md tracking-widest">
                CODE
              </button>
            </Link>
          </div>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2">
          <div className="p-2">
            <p className="text-center font-semibold text-2xl text-gray-700 pb-2">
              Technologies
            </p>
            <div className="px-1 grid items-center grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">React</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">Tailwind</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">JavaScript</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">Next.Js</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">HTML/CSS</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">Vite</span>
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects" className="mb-5 flex items-center">
          <div className="rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiArrowSmLeft className="text-[#5651e5] " size={25} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
