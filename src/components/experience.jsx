import { TbBrandCSharp } from "react-icons/tb";
import { FaGitAlt, FaJsSquare, FaSymfony, FaMarkdown } from "react-icons/fa";
import SQLServer from "../assets/sql_server.svg"
import { DiJqueryLogo } from "react-icons/di";
import CSharp from "../assets/csharp.svg"
import Webby from "../assets/webby.svg"
import { BiLogoPostgresql } from "react-icons/bi";
import { SiInsomnia } from "react-icons/si";

const Experience = () =>
{
  return (
    <>
      <div className="text-center max-w-6xl pb-24 sm:pb-24 lg:pb-24 mx-auto">
        <h1 className="text-5xl font-bold tracking-tight text-balance dark:text-white sm:text-5xl">Work <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500">Experience</span>
        </h1>
        <div className="text-lg font-normal py-5 text-pretty text-gray-600 sm:text-xl/8">
          My professional journey so far.
        </div>

        <div id="accordion-open" data-accordion="open" className=" overflow-hidden shadow-xs mx-8">
          <h2 id="accordion-open-heading-0" className="">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-x-0 border-b-default border-t-0 hover:text-heading border-gray-300 hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-open-body-0" aria-expanded="false" aria-controls="accordion-open-body-0">
              <div className="flex flex-col items-start w-full">

                <p className="text-xl">Full-stack Developer | <span className="font-normal text-gray-600">Webversalis</span></p>
                <p className="text-xs">
                  <span className="">Period : </span>
                  <span>2025 - Present</span>
                </p>
              </div>
              <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" /></svg>
            </button>
          </h2>
          <div id="accordion-open-body-0" className="hidden border border-s-0 border-e-0 border-t-0 border-b-default" aria-labelledby="accordion-open-heading-0">
            <div className="p-4 md:p-5 border border-t-default border-b-0 border-x-0 text-left">
              <p className="text-indigo-500 font-medium">Details :</p>
              <ul className="ps-5 text-body list-disc mb-3">
                <li>
                  Modeled, implemented and deployed a joke API with voting features,
                  categories, and token authentication for user session handling.
                </li>
              </ul>
              <p className="text-indigo-500 font-medium">Project :</p>
              <div className="mx-5 mb-2.5">
                <span>Joke API</span>
              </div>
              <p className="text-indigo-500 font-medium">Technologies :</p>
              <div className="mx-4 flex my-1">
                <FaSymfony size={ 26 } color="3178c6" className="mr-2" />
                <img src={ Webby } className='w-6 mr-2' alt="" />
                <BiLogoPostgresql className="mr-2" color="3178c6" size={ 28 } />
                <FaMarkdown className="rounded mr-2" color="3178c6" size={ 30 } />
                <SiInsomnia className="rounded" color="3178c6" size={ 28 } />
              </div>
            </div>
          </div>
          <h2 id="accordion-open-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-sm border border-t-0 border-x-0 border-b-default border-gray-300 hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="false" aria-controls="accordion-open-body-1">
              <div className="flex flex-col items-start w-full">
                <p>Data Lead | Cargill West Africa</p>
                <p className="text-xs text-gray-400">
                  <span className="text-gray-600">Period : </span>
                  <span>2020 - 2021</span>
                </p>
              </div>
              <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" /></svg>
            </button>
          </h2>
          <div id="accordion-open-body-1" className="hidden border border-s-0 border-e-0 border-t-0 border-b-default border-gray-300" aria-labelledby="accordion-open-heading-1">
            <div className="p-4 md:p-5 border border-t-default border-b-0 border-x-0 text-left">
              <p className="text-blue-500 font-medium">Details :</p>
              <ul className="ps-5 text-body list-disc mb-3">
                <li>
                  Integration of a complete payroll management module into a C# application to simplify the calculation of income based on the category of employees.
                </li>
                <li>
                  Contribution to more efficient user management, development of a customized administrative dashboard by user category, and document download (.xlsx, csc) with ASP. NET, jQuery & SQL Server.
                </li>
              </ul>
              <p className="text-blue-500 font-medium">Project :</p>
              <div className="mx-6 mb-3">
                <span>Mazars Pro</span>
              </div>
              <p className="text-blue-500 font-medium">Technologies :</p>
              <div className="mx-6 flex">
                <img src={ CSharp } className="w-6 mr-3" alt="SQL server logo" />
                <FaGitAlt size={ 26 } color="d74a33" className="mr-3" />
                <FaJsSquare size={ 25 } color="ceb32f" className="mr-3" />
                <img src={ SQLServer } className="w-8 mr-3" alt="SQL server logo" />
                <DiJqueryLogo size={ 26 } color="0563a4" className="mr-3" />
              </div>
            </div>
          </div>
          <h2 id="accordion-open-heading-2">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-x-0 border-b-default border-t-0 hover:text-heading border-gray-300 hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
              <div className="flex flex-col items-start w-full">

                <p>Full-stack Developer | Webversalis</p>
                <p className="text-xs text-gray-400">
                  <span className="text-gray-600">Period : </span>
                  <span>2020 - 2021</span>
                </p>
              </div>
              <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" /></svg>
            </button>
          </h2>
          <div id="accordion-open-body-2" className="hidden border border-s-0 border-e-0 border-t-0 border-b-default" aria-labelledby="accordion-open-heading-2">
            <div className="p-4 md:p-5 border border-t-default border-b-0 border-x-0 text-left">
              <p className="">Details :</p>
              <ul className="ps-5 text-body list-disc mb-3">
                <li>
                  Integration of a complete payroll management module into a C# application to simplify the calculation of income based on the category of employees.
                </li>
                <li>
                  Contribution to more efficient user management, development of a customized administrative dashboard by user category, and document download (.xlsx, csc) with ASP. NET, jQuery & SQL Server.
                </li>
              </ul>
              <p>Project :</p>
              <div className="mx-6 mb-3">
                <span>Mazars Pro</span>
              </div>
              <p>Technologies</p>
              <div className="mx-6 flex">
                <img src={ CSharp } className="w-6 mr-3" alt="SQL server logo" />
                <FaGitAlt size={ 26 } color="d74a33" className="mr-3" />
                <FaJsSquare size={ 25 } color="ceb32f" className="mr-3" />
                <img src={ SQLServer } className="w-8 mr-3" alt="SQL server logo" />
                <DiJqueryLogo size={ 26 } color="0563a4" className="mr-3" />
              </div>
            </div>
          </div>
          <h2 id="accordion-open-heading-3">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
              <div className="flex flex-col items-start w-full">
                <p>Full-stack Developer | Felix Houphouët Boigny University</p>
                <p className="text-xs text-gray-400">
                  <span className="text-gray-600">Period : </span>
                  <span>2020 - 2021</span>
                </p>
              </div>
              <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" /></svg>
            </button>
          </h2>
          <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
            <div className="p-4 md:p-5 border border-t-default border-b-0 border-x-0 text-left">
              <p className="">Details :</p>
              <ul className="ps-5 text-body list-disc mb-3">
                <li>
                  Integration of a complete payroll management module into a C# application to simplify the calculation of income based on the category of employees.
                </li>
                <li>
                  Contribution to more efficient user management, development of a customized administrative dashboard by user category, and document download (.xlsx, csc) with ASP. NET, jQuery & SQL Server.
                </li>
              </ul>
              <p>Project :</p>
              <div className="mx-6 mb-3">
                <span>Mazars Pro</span>
              </div>
              <p>Technologies</p>
              <div className="mx-6 flex">
                <img src={ CSharp } className="w-6 mr-3" alt="SQL server logo" />
                <FaGitAlt size={ 26 } color="d74a33" className="mr-3" />
                <FaJsSquare size={ 25 } color="ceb32f" className="mr-3" />
                <img src={ SQLServer } className="w-8 mr-3" alt="SQL server logo" />
                <DiJqueryLogo size={ 26 } color="0563a4" className="mr-3" />
              </div>
            </div>
          </div>
          <h2 id="accordion-open-heading-4">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-open-body-4" aria-expanded="false" aria-controls="accordion-open-body-3">
              <div className="flex flex-col items-start w-full">
                <p>Web Developer | Filao</p>
                <p className="text-xs text-gray-400">
                  <span className="text-gray-600">Period : </span>
                  <span>2020 - 2021</span>
                </p>
              </div>
              <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" /></svg>
            </button>
          </h2>
          <div id="accordion-open-body-4" className="hidden" aria-labelledby="accordion-open-heading-4">
            <div className="p-4 md:p-5 border border-t-default border-b-0 border-x-0 text-left">
              <p className="">Details :</p>
              <ul className="ps-5 text-body list-disc mb-3">
                <li>
                  Integration of a complete payroll management module into a C# application to simplify the calculation of income based on the category of employees.
                </li>
                <li>
                  Contribution to more efficient user management, development of a customized administrative dashboard by user category, and document download (.xlsx, csc) with ASP. NET, jQuery & SQL Server.
                </li>
              </ul>
              <p>Project :</p>
              <div className="mx-6 mb-3">
                <span>Mazars Pro</span>
              </div>
              <p>Technologies</p>
              <div className="mx-6 flex">
                <img src={ CSharp } className="w-6 mr-3" alt="SQL server logo" />
                <FaGitAlt size={ 26 } color="d74a33" className="mr-3" />
                <FaJsSquare size={ 25 } color="ceb32f" className="mr-3" />
                <img src={ SQLServer } className="w-8 mr-3" alt="SQL server logo" />
                <DiJqueryLogo size={ 26 } color="0563a4" className="mr-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Experience
