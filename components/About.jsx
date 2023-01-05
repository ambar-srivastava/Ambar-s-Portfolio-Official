import Image from "next/image";
import Link from "next/link";
import React from "react";
import aboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className=" w-full md:h-screen p-2 flex items-center pb-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 font-semibold">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hello! My name is{" "}
            <strong className="text-[#5651e5]">Ambar Srivastava</strong> and I
            am a <strong>Frontend web developer(React.js)</strong> with 6 months
            of experience as an Intern. My primary skillset includes React.js
            and I have a strong understanding of{" "}
            <strong>HTML, CSS, and JavaScript</strong>. In my previous
            internship, I worked on various projects where I utilized my skills
            in Reactjs to develop and maintain web applications. I am a quick
            learner and am always looking for opportunities to expand my
            knowledge and grow as a developer. I am excited to bring my skills
            and enthusiasm to any team I join and contribute to the success of
            the project.
          </p>
          <p className="py-2 text-gray-600">
            During my time as an Intern, I was able to get hands-on experience
            in the development process, from ideation to deployment. I worked
            closely with a team of developers and gained valuable insights into
            the industry.
          </p>
          <p className="py-2 text-gray-600">
            I am well-versed in modern web development best practices and have a
            strong foundation in computer science concepts. I am confident in my
            ability to write clean, efficient code and am always looking for
            ways to improve my skills.
          </p>
          <p className="py-2 text-gray-600">
            I am excited to bring my passion for web development and my
            dedication to continuous learning to any team I join. I am eager to
            take on new challenges and contribute to the success of the project.
          </p>
          <Link href="#projects">
            <p className="py-2 text-[#5651e5] underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className=" rounded-xl" src={aboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
