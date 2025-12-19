import {
  FaGitAlt,
  FaJsSquare,
  FaSymfony,
  FaMarkdown,
  FaDatabase,
  FaPhp,
} from "react-icons/fa";
import SQLServer from "../assets/sql_server.svg";
import { DiJqueryLogo } from "react-icons/di";
import CSharp from "../assets/csharp.svg";
import JQuery from "../assets/jquery.svg";
import Webby from "../assets/webby.svg";
import { IoLogoVue } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiInsomnia,
  SiJetpackcompose,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { useState } from "react";

const AccordionItem = ({
  id,
  title,
  period,
  details,
  projects,
  technologies,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-s-0 border-e-0 border-t-0 border-b-default">
      <h2 id={`accordion-item-${id}`} className="">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-x-0 border-b-default border-t-0 hover:text-heading border-gray-300 hover:bg-neutral-secondary-medium gap-3 transition-colors duration-300 ${
            isOpen ? "bg-neutral-secondary-medium" : ""
          }`}
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${id}`}
        >
          <div className="flex flex-col items-start w-full text-gray-600">
            <p className="text-xl font-normal">{title}</p>
            <p className="text-xs">
              <span className="">Period : </span>
              <span>{period}</span>
            </p>
          </div>
          <svg
            className={`w-5 h-5 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m5 15 7-7 7 7"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-content-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-labelledby={`accordion-item-${id}`}
      >
        <div className="p-4 md:p-5 border border-t-default border-b-0 border-x-0 text-left">
          <p className="text-indigo-500 font-medium">Details :</p>
          <ul className="ps-5 text-body list-disc mb-3">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <p className="text-indigo-500 font-medium">Project :</p>
          <div className="flex flex-wrap gap-3 mx-5 my-3">
            {projects.map((project, index) => (
              <span
                key={index}
                className="font-medium p-2 rounded-xs text-sm ring-1 ring-gray-300"
              >
                {project}
              </span>
            ))}
          </div>
          <p className="text-indigo-500 font-medium">Technologies :</p>
          <div className="mx-6 flex flex-wrap my-1">
            {technologies.map((tech, index) => (
              <div key={index} className="mr-3 mb-1">
                {typeof tech === "object" && tech.type === "icon" ? (
                  <tech.component
                    size={tech.size}
                    color={tech.color}
                    className={tech.className}
                  />
                ) : tech.type === "image" ? (
                  <img
                    src={tech.src}
                    className={tech.className}
                    alt={tech.alt}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      id: 0,
      title: "Full-stack Developer | Webversalis",
      period: "2025 - Present",
      details: [
        "Modeled, implemented and deployed a joke API with voting features, categories, and token authentication for user session handling.",
      ],
      projects: ["Joke API"],
      technologies: [
        {
          type: "icon",
          component: FaSymfony,
          size: 26,
          color: "3178c6",
          className: "mr-2",
        },
        { type: "image", src: Webby, className: "w-6 mr-2", alt: "" },
        {
          type: "icon",
          component: BiLogoPostgresql,
          size: 28,
          color: "3178c6",
          className: "mr-2",
        },
        {
          type: "icon",
          component: FaMarkdown,
          size: 30,
          color: "3178c6",
          className: "rounded mr-2",
        },
        {
          type: "icon",
          component: SiInsomnia,
          size: 28,
          color: "3178c6",
          className: "rounded",
        },
      ],
    },
    {
      id: 1,
      title: "Data Lead | Cargill West Africa",
      period: "2023 - 2025",
      details: [
        "Design, development and deployment of an administrative dashboard connected to an SAP system for real-time monitoring of cocoa delivery activities from more than 150 cooperatives to the company's warehouse.",
        "Development of a mobile application with Jetpack Compose to enable digital field edge purchases and a web application with ASP.NET,JQuery and SQL Server for general activity tracking.",
      ],
      projects: [
        "TraceXpert (Web application)",
        "TraceXpert (Mobile application)",
        "Sourcing Dashboard",
      ],
      technologies: [
        {
          type: "icon",
          component: SiJetpackcompose,
          size: 26,
          color: "4285f4",
          className: "mr-3",
        },
        {
          type: "image",
          src: CSharp,
          className: "w-[22px] mr-3",
          alt: "C# logo",
        },
        {
          type: "image",
          src: JQuery,
          className: "w-14 mr-3",
          alt: "jQuery logo",
        },
        {
          type: "icon",
          component: FaDatabase,
          size: 26,
          color: "0563a4",
          className: "mr-3",
        },
      ],
    },
    {
      id: 2,
      title: "Full-stack Developer | Webversalis",
      period: "2022 - 2023",
      details: [
        "Development and deployment of a modern puzzle game web application build with famous Switzerland places - with Vue, Tailwindcss, Typescript and server-side application with symfony.",
        "Creation of a website collecting quotes from historical and contemporary authors with a module for sharing and adding favorites.",
        "Contribution to the development of a content management platform for multiple sites - built with Vue, Tailwindcss, and server-side with Symfony.",
      ],
      projects: ["Citation Emporium", "Helvetica Puzzle", "Intraversalis"],
      technologies: [
        {
          type: "icon",
          component: IoLogoVue,
          size: 24,
          color: "3fb17f",
          className: "mr-3",
        },
        {
          type: "icon",
          component: RiTailwindCssFill,
          size: 28,
          color: "6366f1",
          className: "mr-3",
        },
        {
          type: "icon",
          component: SiTypescript,
          size: 23,
          color: "3178c6",
          className: "rounded-xs mr-3",
        },
        {
          type: "icon",
          component: FaSymfony,
          size: 25,
          color: "3178c6",
          className: "rounded mr-3",
        },
        { type: "image", src: Webby, className: "w-6", alt: "" },
      ],
    },
    {
      id: 3,
      title: "Full-stack Developer | Felix Houphouët Boigny University",
      period: "2021 - 2022",
      details: [
        "Developed the backend module for managing the text notebooks of my university professors using PHP, TCPDF, and MySQL. Additionally, I helped develop a comprehensive module for printing personalized documents from my university.",
      ],
      projects: ["Notebooks Management System"],
      technologies: [
        {
          type: "icon",
          component: FaPhp,
          size: 26,
          color: "2c7bb2",
          className: "mr-3",
        },
        {
          type: "icon",
          component: FaGitAlt,
          size: 26,
          color: "d74a33",
          className: "mr-3",
        },
        {
          type: "icon",
          component: FaJsSquare,
          size: 25,
          color: "ceb32f",
          className: "mr-3",
        },
        {
          type: "image",
          src: JQuery,
          className: "w-14 mr-3",
          alt: "jQuery logo",
        },
        {
          type: "icon",
          component: SiMysql,
          size: 30,
          color: "407f90",
          className: "mr-3",
        },
      ],
    },
    {
      id: 4,
      title: "Web Developer | Filao",
      period: "2020 - 2021",
      details: [
        "Integration of a complete payroll management module into a C# application to simplify the calculation of income based on the category of employees.",
        "Contribution to more efficient user management, development of a customized administrative dashboard by user category, and document download (.xlsx, csc) with ASP. NET, jQuery & SQL Server.",
      ],
      projects: ["Mazars Pro"],
      technologies: [
        { type: "image", src: CSharp, className: "w-6 mr-3", alt: "C# logo" },
        {
          type: "icon",
          component: FaGitAlt,
          size: 26,
          color: "d74a33",
          className: "mr-3",
        },
        {
          type: "icon",
          component: FaJsSquare,
          size: 25,
          color: "ceb32f",
          className: "mr-3",
        },
        {
          type: "image",
          src: SQLServer,
          className: "w-8 mr-3",
          alt: "SQL server logo",
        },
        {
          type: "icon",
          component: DiJqueryLogo,
          size: 26,
          color: "0563a4",
          className: "mr-3",
        },
      ],
    },
  ];

  return (
    <>
      <div
        id="experiences"
        className="text-center max-w-6xl pb-24 sm:pb-24 lg:pb-24 mx-auto"
      >
        <h1
          data-aos="flip-up"
          data-aos-duration="1000"
          className="text-5xl font-bold tracking-tight text-balance dark:text-white sm:text-5xl"
        >
          Work{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500">
            Experience
          </span>
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-lg font-normal py-5 text-pretty text-gray-600 sm:text-xl/8"
        >
          My professional journey so far.
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          id="accordion-open"
          className="overflow-hidden shadow-xs mx-8"
        >
          {experiences.map((exp) => (
            <AccordionItem key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
