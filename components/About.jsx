import Link from "next/link";
import React from "react";

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
            // I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            repellendus quae sed minima minus aut fuga quia optio, consequatur
            corrupti quibusdam assumenda omnis aspernatur illum error modi porro
            eum vero nihil consequuntur eos nemo sapiente placeat. Enim
            voluptate dolores officiis a! Quos cum excepturi dignissimos id
            provident sed magnam facere!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed natus
            fuga delectus beatae voluptas, doloremque sit similique ducimus.
            Similique dolores nostrum ducimus natus rem ab reprehenderit error
            dicta sed unde, libero cumque nam. Sapiente quod cum hic fugit
            veritatis excepturi.
          </p>
          <Link href="#projects">
            <p className="py-2 text-[#5651e5] underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className=" rounded-xl"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
