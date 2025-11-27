import Intraversalis from '../assets/intraversalis_.png'
import Helvetica from "../assets/helvetica.png"
import { IoLogoVue } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiInsomnia } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import Pinia from "../assets/pinia.svg"
import Element from '../assets/element.svg'
import { FaCss3Alt, FaHtml5, FaSass, FaSymfony, FaMarkdown } from "react-icons/fa";
import Webby from "../assets/webby.svg"

const Projects = () =>
{
  return (
    <>
      <div className="text-center mx-auto max-w-6xl pb-24 sm:pb-24 lg:pb-24">
        <h1 className="text-5xl font-bold tracking-tight text-balance dark:text-white sm:text-5xl">My Featured <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500">Projects</span>
        </h1>
        <h1 className="py-3.5 text-3xl font-bold tracking-tight text-balance text-gray-400 dark:text-white sm:text-4xl">Recent projects</h1>
        <div className="text-lg font-normal text-pretty max-w-3xl mx-auto text-gray-600 sm:text-xl/8">
          A selection of my work that demonstrates my skills in web application development.
        </div>

        <div className="dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mt-10 grid max-w-2xl mx-auto justify-items-center grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

              <article className="max-w-sm bg-white border border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#" className=''>
                  <img className="rounded-lg object-cover h-50 w-full" src={ Intraversalis } alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Intraversalis</h5>
                  </a>
                  <p className="font-normal text-gray-700 dark:text-gray-400">Administrative web platform for managing multiple websites content and meta data information.</p>
                  <div className='flex justify-evenly items-center py-3'>
                    <IoLogoVue size={ 24 } color="3fb17f" />
                    <RiTailwindCssFill color="6366f1" size={ 28 } />
                    <SiTypescript className="rounded" color="3178c6" size={ 24 } />
                    <BiLogoPostgresql className="" color="3178c6" size={ 28 } />
                    <img src={ Pinia } className='w-5' alt="" />
                    <img src={ Element } className='w-5' alt="" />
                  </div>
                  <a href="https://intraversalis.webversalis.net" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Live demo
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </article>


              <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-lg object-cover h-50" src={ Helvetica } alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Helvetica Puzzle</h5>
                  </a>
                  <p className="font-normal text-gray-700 dark:text-gray-400">A web application featuring puzzle games built from images of famous places in Switzerland.</p>
                  <div className='flex justify-evenly items-center py-3'>
                    <FaHtml5 className="rounded" color="3178c6" size={ 28 } />
                    <FaCss3Alt color="259ec9" size={ 28 } />
                    <FaSass color="6366f1" size={ 28 } />
                    <SiTypescript className="rounded" color="3178c6" size={ 24 } />
                    <IoLogoVue size={ 24 } color="3fb17f" />
                    <RiTailwindCssFill color="6366f1" size={ 28 } />
                  </div>
                  <a href="https://puzzle-helvetica.webversalis.net" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Live demo
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </article>

              <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1759049219585-4feb729fb018?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1278" alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Joke API</h5>
                  </a>
                  <p className="font-normal text-gray-700 dark:text-gray-400">Modeled, and deployed a joke API with voting features, categories, and token authentication.</p>
                  <div className='flex justify-evenly items-center py-3'>
                    <FaSymfony className="rounded" color="3178c6" size={ 28 } />
                    <img src={ Webby } className='w-8' alt="" />
                    <BiLogoPostgresql className="" color="3178c6" size={ 28 } />
                    <FaMarkdown className="rounded" color="3178c6" size={ 30 } />
                    <SiInsomnia className="rounded" color="3178c6" size={ 28 } />
                  </div>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View project
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </article>


            </div>
          </div>
        </div>

      </div>
    </>
  )
};

export default Projects
