import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItems = (props) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group ease-in duration-300 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={props.backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-medium text-white tracking-wider text-center">
          {props.title}
        </h3>
        <p className="pb-4 pt-2 text-white text-md font-normal text-center">React JS</p>
        <Link href={props.projectUrl}>
          <p className="text-center py-3 rounded-md bg-gray-100 text-gray-700 font-semibold text-sm cursor-pointer tracking-wider">
            MORE INFO
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
