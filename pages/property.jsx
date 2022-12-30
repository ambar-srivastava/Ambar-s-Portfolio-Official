import Image from "next/legacy/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

const Property = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-screen h-[35vh] lg:h-[45vh] relative">
        <div className="absolute top-0 left-0 w-full h-[35vh] lg:h-[45vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className=" absolute top-[75%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
          <h2 className="py-2 font-medium text-4xl text-gray-200">
            Property Finder
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            tempore non omnis dolorem laborum nesciunt voluptates, perspiciatis
            natus officia aperiam tenetur, minus eos deleniti beatae, modi alias
            aspernatur dolore suscipit! Distinctio iusto eos quas facilis, sint
            culpa voluptates maxime mollitia dolor? Quibusdam excepturi ut
            numquam officia reprehenderit debitis praesentium beatae. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Ex minus
            dignissimos quidem. Delectus dolorum placeat quae dolor dignissimos,
            commodi saepe provident fugiat! Ipsam dolor ea tenetur debitis ut.
            Quae, doloremque! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Eos quae quaerat eaque voluptate ea dolorum non
            rerum aliquam modi laboriosam praesentium, illo vero perspiciatis
            eveniet molestiae ipsum, a numquam corrupti!
          </p>
          <div className="mb-10">
            <button className=" px-14 py-2 mt-4 mr-8 rounded-md tracking-widest">
              DEMO
            </button>
            <button className=" px-14 py-2 mt-4 rounded-md tracking-widest">
              CODE
            </button>
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
                <span className="m font-medium">Tailwind</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className="m font-medium">JavaScript</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className="m font-medium">Firebase</span>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" />
                <span className="m font-medium">Rapid API</span>
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

export default Property;
