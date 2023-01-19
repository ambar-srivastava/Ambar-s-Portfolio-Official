import Image from "next/legacy/image";
import React from "react";
import cryptoImg from "../public/assets/projects/CryptoApp.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

const Crypto = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-screen h-[35vh] lg:h-[45vh] relative">
        <div className="absolute top-0 left-0 w-full h-[35vh] lg:h-[45vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="/"
        />
        <div className=" absolute top-[75%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
          <h2 className="py-2 font-medium text-4xl text-gray-200">
            Crypto App
          </h2>
          <h3 className=" font-medium text-gray-300">
            React JS / Tailwind / Firebase
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 items-center gap-8 pt-8 ">
        <div className=" col-span-4">
          <p className=" uppercase tracking-widest text-[#5651e5] font-medium">
            Project
          </p>
          <h2 className=" text-gray-700 text-3xl my-2">Overview</h2>
          <p className="mb-4 text-sm">
            CryptoApp is a web application that provides users with a convenient
            and user-friendly interface for viewing and interacting with
            real-time cryptocurrency data and charts. The application is built
            using React, a JavaScript library for building user interfaces, and
            Redux Toolkit, a set of tools that simplifies the process of using
            Redux, a state management library, in a React application. <br />
            <br />
            The application utilizes Chart.js, a JavaScript library that allows
            developers to create visually appealing charts and graphs, to
            display cryptocurrency data in an easy-to-understand format. The
            user interface is designed using Ant Design, a React-based design
            system that provides a set of high-quality UI components and a
            consistent design language. <br /> <br />
            To access cryptocurrency data, the application utilizes RapidAPI, a
            platform that allows developers to discover and connect to
            third-party APIs. This allows the application to retrieve real-time
            data from various sources, such as exchanges or market data
            providers. <br />
            <br />
            Overall, the combination of React, Redux Toolkit, Chart.js, Ant
            Design, and RapidAPI allows the application to provide users with a
            powerful and feature-rich interface for interacting with
            cryptocurrency data.
          </p>
          <div className="mb-10">
            <Link
              href="https://cryptocurrencyapplication.netlify.app/"
              target="_blank"
            >
              <button className=" px-14 py-2 mt-4 mr-8 rounded-md tracking-widest">
                DEMO
              </button>
            </Link>

            <Link
              href="https://github.com/ambar-srivastava/cryptoApp"
              target="_blank"
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
            <div className="px-1 grid items-center grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">React.js</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">Redux Toolkit</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">Ant Design</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">JavaScript</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">Chart.js</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">Rapid API</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className=" font-medium">HTML/CSS</span>
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

export default Crypto;
