import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillMail, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../public/assets/Ambar Srivastava.svg";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (
      router.asPath === "/property" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }

    const handleShadow = () => {
      if (window.scrollY >= 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, [router]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 backdrop-blur-md">
        <Link href="/">
          {/* <h2 className=" !font-fancy text-[50px] text-[#5651e5]">
            Ambar Srivastava
          </h2> */}
          <Image src={logo} width="250" alt="/" />
        </Link>
        <div>
          <ul className=" hidden md:flex" style={{ color: `${linkColor}` }}>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:text-gray-500">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:text-gray-500">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:text-gray-500">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:text-gray-500">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:text-gray-500">
                Contact
              </li>
            </Link>
            <Link
              href="/files/ResumeAmbar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              alt="alt text"
              download="Ambar's Resume | Front-end developer"
            >
              <li className="ml-10 text-sm uppercase hover:text-gray-500">
                Resume
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} style={{ color: `${linkColor}` }} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70 ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-200%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className=" flex w-full h-auto items-center justify-between">
              <Link href="/">
                {/* <h2 className=" font-qwigley text-[30px] pt-[10px] text-[#5651e5]">
                  Ambar Srivastava
                </h2> */}

                <Image src={logo} width="140" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&rsquo;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col justify-between min-h-[70vh]">
            <ul className=" uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
              <Link
                href="/files/ResumeAmbar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                alt="alt text"
                download="Ambar's Resume | Front-end developer"
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
            </ul>
            <div className="pb-2">
              <p className=" uppercase tracking-widest text-[#5651e5]">
                Let&rsquo;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/ambar-srivastava-09b1431bb/"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn className="text-[#5651e5]" />
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/ambar-srivastava"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub className="text-[#5651e5]" />
                  </div>
                </Link>
                <Link target="_blank" href="mailto:ambar0027coc@gmail.com">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillMail className="text-[#5651e5]" />
                  </div>
                </Link>
                <Link href="tel:7268003088">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill className="text-[#5651e5]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
