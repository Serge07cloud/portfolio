import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { IoLogoVue } from "react-icons/io5";
import { FaSymfony } from "react-icons/fa6";

const CoreTech = () => {
  return (
    <>
      <div className="dark:text-gray-50 max-w-6xl">
        <div className="py-8 flex justify-center items-center">
          <GrTechnology />
          <span className="mx-1 uppercase font-light text-md font-mono">
            Core technologies
          </span>
        </div>
        <div className="grid grid-cols-2  md:flex md:flex-wrap md:justify-center gap-3">
          <div className="flex justify-center items-center font-semibold px-3 py-2 rounded-sm shadow ring-1 ring-black/10">
            <FaReact color="00ffff" size={16} />{" "}
            <span className="mx-1 text-md ">React</span>
          </div>
          <div className="flex justify-center items-center font-semibold  px-3 py-2 rounded-sm shadow ring-1 ring-black/10">
            <IoLogoNodejs color="7dc823" size={16} />{" "}
            <span className="mx-1 text-md">Express.Js</span>
          </div>
          <div className="flex justify-center items-center font-semibold px-3 py-2 rounded-sm shadow ring-1 ring-black/10">
            <SiMongodb color="419432" size={16} />{" "}
            <span className="mx-1 text-md">MongoDB</span>
          </div>
          <div className="flex justify-center items-center font-semibold px-3 py-2 rounded-sm shadow ring-1 ring-black/10">
            <RiTailwindCssFill color="6366f1" size={16} />{" "}
            <span className="mx-1 text-md">Tailwind</span>
          </div>
          <div className="flex justify-center items-center font-semibold px-3 py-2 rounded-sm shadow ring-1 ring-black/10">
            <SiTypescript className="rounded" color="3178c6" size={16} />{" "}
            <span className="mx-1 text-md">Typescript</span>
          </div>
          <div className="flex justify-center items-center font-semibold px-3 py-2 rounded-sm shadow ring-1 ring-black/10">
            <IoLogoVue className="" color="3fb17f" size={16} />
            <span className="mx-1 text-md">Vue.Js</span>
          </div>
          <div className="flex justify-center items-center font-semibold px-3 py-2 rounded-sm shadow ring-1 ring-black/10">
            <FaSymfony className="" color="3178c6" size={16} />
            <span className="mx-1 text-md">Symfony</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreTech;
