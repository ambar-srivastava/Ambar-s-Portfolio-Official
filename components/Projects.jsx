import React from "react";
import ProjectItems from "./ProjectItems";
import propetyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/CryptoApp.png";
import portfolioImg from "../public/assets/projects/portfolio.png";
import twitchImg from "../public/assets/projects/twitch.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 font-semibold">What I&rsquo;ve Built</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Property Finder"
            backgroundImg={propetyImg}
            projectUrl="/property"
          />
          <ProjectItems
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItems
            title="Personal Portfolio"
            backgroundImg={portfolioImg}
            projectUrl="/portfolio"
          />
          <ProjectItems
            title="Twitch Clone"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
