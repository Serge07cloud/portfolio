import { TbBrandCSharp } from "react-icons/tb";
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

const Experience = () => {
  return (
    <>
      <div className="text-center max-w-6xl pb-24 sm:pb-24 lg:pb-24 mx-auto">
        <h1 className="text-5xl font-bold tracking-tight text-balance dark:text-white sm:text-5xl">
          Work{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500">
            Experience
          </span>
        </h1>
        <div className="text-lg font-normal py-5 text-pretty text-gray-600 sm:text-xl/8">
          My professional journey so far.
        </div>

        <div
          id="accordion-open"
          data-accordion="open"
          className=" overflow-hidden shadow-xs mx-8"
        >
          <h2 id="accordion-open-heading-0" className="">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-x-0 border-b-default border-t-0 hover:text-heading border-gray-300 hover:bg-neutral-secondary-medium gap-3"
              data-accordion-target="#accordion-open-body-0"
              aria-expanded="false"
              aria-controls="accordion-open-body-0"
            >
              <div className="flex flex-col items-start w-full text-gray-600">
                <p className="text-xl font-normal">
                  Full-stack Developer | Webversalis
                </p>
                <p className="text-xs">
                  <span className="">Period : </span>
                  <span>
                    2025 - <span className="text-blue-500">Present</span>
                  </span>
                </p>
              </div>
              <svg
                data-accordion-icon
                className="w-5 h-5 rotate-180 shrink-0"
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
            id="accordion-open-body-0"
            className="hidden border border-s-0 border-e-0 border-t-0 border-b-default"
            aria-labelledby="accordion-open-heading-0"
          >
            <div className="p-4 md:p-5 border border-t-default border-b-0 border-x-0 text-left">
              <p className="text-indigo-500 font-medium">Details :</p>
              <ul className="ps-5 text-body list-disc mb-3">
                <li>
                  Modeled, implemented and deployed a joke API with voting
                  features, categories, and token authentication for user
                  session handling.
                </li>
              </ul>
              <p className="text-indigo-500 font-medium">Project :</p>
              <div className="mx-5 my-3">
                <span className="font-medium p-2 rounded-xs text-sm ring-1 ring-gray-300">
                  Joke API
                </span>
              </div>
              <p className="text-indigo-500 font-medium">Technologies :</p>
              <div className="mx-4 flex my-1">
                <FaSymfony size={26} color="3178c6" className="mr-2" />
                <img src={Webby} className="w-6 mr-2" alt="" />
                <BiLogoPostgresql className="mr-2" color="3178c6" size={28} />
                <FaMarkdown className="rounded mr-2" color="3178c6" size={30} />
                <SiInsomnia className="rounded" color="3178c6" size={28} />
              </div>
            </div>
          </div>
          <h2 id="accordion-open-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-sm border border-t-0 border-x-0 border-b-default border-gray-300 hover:text-heading hover:bg-neutral-secondary-medium gap-3"
              data-accordion-target="#accordion-open-body-1"
              aria-expanded="false"
              aria-controls="accordion-open-body-1"
            >
              <div className="flex flex-col items-start w-full text-gray-600">
                <p className="text-xl font-normal">
                  Data Lead | Cargill West Africa
                </p>
                <p className="text-xs">
                  <span className="">Period : </span>
                  <span>2023 - 2025</span>
                </p>
              </div>
              <svg
                data-accordion-icon
                className="w-5 h-5 rotate-180 shrink-0"
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
            id="accordion-open-body-1"
            className="hidden border border-s-0 border-e-0 border-t-0 border-b-default border-gray-300"
            aria-labelledby="accordion-open-heading-1"
          >
            <div className="p-4 md:p-5 border border-t-default border-b-0 border-x-0 text-left">
              <p className="text-blue-500 font-medium">Details :</p>
              <ul className="ps-5 text-body list-disc mb-3">
                <li>
                  Design, development and deployment of an administrative
                  dashboard connected to an SAP system for real-time monitoring
                  of cocoa delivery activities from more than 150 cooperatives
                  to the company's warehouse.
                </li>
                <li>
                  Development of a mobile application with Jetpack Compose to
                  enable digital field edge purchases and a web application with
                  ASP.NET,JQuery and SQL Server for general activity tracking.
                </li>
              </ul>
              <p className="text-blue-500 font-medium">Project :</p>
              <div className="flex flex-wrap gap-3 mx-5 my-3">
                <span className="font-medium p-2 rounded-xs text-sm ring-1 ring-gray-300">
                  TraceXpert (Web application)
                </span>
                <span className="font-medium p-2 rounded-xs text-sm ring-1 ring-gray-300">
                  TraceXpert (Mobile application)
                </span>
                <span className="font-medium p-2 rounded-xs text-sm ring-1 ring-gray-300">
                  Sourcing Dashboard
                </span>
              </div>
              <p className="text-blue-500 font-medium">Technologies :</p>
              <div className="mx-6 flex my-1">
                <SiJetpackcompose size={26} color="4285f4" className="mr-3" />
                <img
                  src={CSharp}
                  className="w-[22px] mr-3"
                  alt="SQL server logo"
                />
                <img src={JQuery} className="w-14 mr-3" alt="SQL server logo" />
                <FaDatabase size={26} color="0563a4" className="mr-3" />
              </div>
            </div>
          </div>
          <h2 id="accordion-open-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-x-0 border-b-default border-t-0 hover:text-heading border-gray-300 hover:bg-neutral-secondary-medium gap-3"
              data-accordion-target="#accordion-open-body-2"
              aria-expanded="false"
              aria-controls="accordion-open-body-2"
            >
              <div className="flex flex-col items-start w-full text-gray-600">
                <p className="text-xl font-normal">
                  Full-stack Developer | Webversalis
                </p>
                <p className="text-xs ">
                  <span className="">Period : </span>
                  <span>2022 - 2023</span>
                </p>
              </div>
              <svg
                data-accordion-icon
                className="w-5 h-5 rotate-180 shrink-0"
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
            id="accordion-open-body-2"
            className="hidden border border-s-0 border-e-0 border-t-0 border-b-default"
            aria-labelledby="accordion-open-heading-2"
          >
            <div className="p-4 md:p-5 border border-t-default border-b-0 border-x-0 text-left">
              <p className="text-indigo-500 font-medium">Details :</p>
              <ul className="ps-5 text-body list-disc mb-3">
                <li>
                  Development and deployment of a modern puzzle game web
                  application build with famous Switzerland places - with Vue,
                  Tailwindcss, Typescript and server-side application with
                  symfony.
                </li>
                <li>
                  Creation of a website collecting quotes from historical and
                  contemporary authors with a module for sharing and adding
                  favorites.
                </li>
                <li>
                  Contribution to the development of a content management
                  platform for multiple sites - built with Vue, Tailwindcss, and
                  server-side with Symfony.
                </li>
              </ul>
              <p className="text-indigo-500 font-medium">Project :</p>
              <div className="flex flex-wrap gap-3 mx-5 my-3">
                <span className="font-medium p-2 rounded-xs text-sm ring-1 ring-gray-300">
                  Citation Emporium
                </span>
                <span className="font-medium p-2 rounded-xs text-sm ring-1 ring-gray-300 mx-3">
                  Helvetica Puzzle
                </span>
                <span className="font-medium p-2 rounded-xs text-sm ring-1 ring-gray-300">
                  Intraversalis
                </span>
              </div>
              <p className="text-indigo-500 font-medium">Technologies :</p>
              <div className="mx-6 flex my-1">
                <IoLogoVue className="mr-3" size={24} color="3fb17f" />
                <RiTailwindCssFill className="mr-3" color="6366f1" size={28} />
                <SiTypescript
                  className="rounded-xs mr-3"
                  color="3178c6"
                  size={23}
                />
                <FaSymfony className="rounded mr-3" color="3178c6" size={25} />
                <img src={Webby} className="w-6" alt="" />
              </div>
            </div>
          </div>
          <h2 id="accordion-open-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body hover:text-heading hover:bg-neutral-secondary-medium gap-3"
              data-accordion-target="#accordion-open-body-3"
              aria-expanded="false"
              aria-controls="accordion-open-body-3"
            >
              <div className="flex flex-col items-start w-full text-gray-600">
                <p className="text-xl font-normal">
                  Full-stack Developer | Felix Houphouët Boigny University
                </p>
                <p className="text-xs">
                  <span className="">Period : </span>
                  <span>2021 - 2022</span>
                </p>
              </div>
              <svg
                data-accordion-icon
                className="w-5 h-5 rotate-180 shrink-0"
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
            id="accordion-open-body-3"
            className="hidden"
            aria-labelledby="accordion-open-heading-3"
          >
            <div className="p-4 md:p-5 border border-t-default border-b-0 border-x-0 text-left">
              <p className="text-blue-500 font-medium">Details :</p>
              <ul className="ps-5 text-body list-disc mb-3">
                <li>
                  Developed the backend module for managing the text notebooks
                  of my university professors using PHP, TCPDF, and MySQL.
                  Additionally, I helped develop a comprehensive module for
                  printing personalized documents from my university.
                </li>
              </ul>
              <p className="text-blue-500 font-medium">Project :</p>
              <div className="flex flex-wrap gap-3 mx-5 my-3">
                <span className="font-medium p-2 rounded-xs text-sm ring-1 ring-gray-300">
                  Notebooks Management System
                </span>
              </div>
              <p className="text-blue-500 font-medium">Technologies :</p>
              <div className="mx-6 flex my-1">
                <FaPhp size={26} color="2c7bb2" className="mr-3" />
                <FaGitAlt size={26} color="d74a33" className="mr-3" />
                <FaJsSquare size={25} color="ceb32f" className="mr-3" />
                <img src={JQuery} className="w-14 mr-3" alt="SQL server logo" />
                <SiMysql size={30} color="407f90" className="mr-3" />
              </div>
            </div>
          </div>
          <h2 id="accordion-open-heading-4">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body hover:text-heading hover:bg-neutral-secondary-medium gap-3"
              data-accordion-target="#accordion-open-body-4"
              aria-expanded="false"
              aria-controls="accordion-open-body-3"
            >
              <div className="flex flex-col items-start w-full text-gray-600">
                <p className="text-xl font-normal">Web Developer | Filao</p>
                <p className="text-xs ">
                  <span className="">Period : </span>
                  <span>2020 - 2021</span>
                </p>
              </div>
              <svg
                data-accordion-icon
                className="w-5 h-5 rotate-180 shrink-0"
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
            id="accordion-open-body-4"
            className="hidden"
            aria-labelledby="accordion-open-heading-4"
          >
            <div className="p-4 md:p-5 border border-t-default border-b-0 border-x-0 text-left">
              <p className="text-indigo-500 font-medium">Details :</p>
              <ul className="ps-5 text-body list-disc mb-3">
                <li>
                  Integration of a complete payroll management module into a C#
                  application to simplify the calculation of income based on the
                  category of employees.
                </li>
                <li>
                  Contribution to more efficient user management, development of
                  a customized administrative dashboard by user category, and
                  document download (.xlsx, csc) with ASP. NET, jQuery & SQL
                  Server.
                </li>
              </ul>
              <p className="text-indigo-500 font-medium">Project :</p>
              <div className="flex flex-wrap gap-3 mx-5 my-3">
                <span className="font-medium p-2 rounded-xs text-sm ring-1 ring-gray-300">
                  Mazars Pro
                </span>
              </div>
              <p className="text-indigo-500 font-medium">Technologies :</p>
              <div className="mx-6 flex my-1">
                <img src={CSharp} className="w-6 mr-3" alt="SQL server logo" />
                <FaGitAlt size={26} color="d74a33" className="mr-3" />
                <FaJsSquare size={25} color="ceb32f" className="mr-3" />
                <img
                  src={SQLServer}
                  className="w-8 mr-3"
                  alt="SQL server logo"
                />
                <DiJqueryLogo size={26} color="0563a4" className="mr-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
