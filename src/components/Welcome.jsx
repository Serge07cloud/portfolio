import CoreTech from "./coreTech";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiOvermind, GiGraduateCap } from "react-icons/gi";

const Welcome = () => {
  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1 % 44.1 %, 100 % 61.6 %, 97.5 % 26.9 %, 85.5 % 0.1 %, 80.7 % 2 %, 72.5 % 32.5 %, 60.2 % 62.4 %, 52.4 % 68.1 %, 47.5 % 58.3 %, 45.2 % 34.5 %, 27.5 % 76.7 %, 0.1 % 64.9 %, 17.9 % 100 %, 27.6 % 76.8 %, 76.1 % 97.7 %, 74.1 % 44.1 %)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
            ></div>
          </div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative flex justify-center items-center rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-black/10 hover:ring-white/20">
              <span className="relative flex size-3 mx-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
              </span>

              <div>
                Open to collaborative research and development.{" "}
                <a href="#" className="font-semibold text-indigo-400">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  Get in touch <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance dark:text-white sm:text-7xl">
              I can help you turn your ideas in seamless digital experiences
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Hi, Welcome on my digital portfolio. I am{" "}
              <span className="text-xl  dark:text-gray-50">Landry Konan</span>,
              a fullstack web developer building smart, fun and scalable web
              applications.
            </p>
            <CoreTech />
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 animate-pulse"
              >
                Get in touch
              </a>
              <a href="#" className="text-sm/6 font-semibold dark:text-white">
                See projects <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          ></div>
        </div>

        <div className="text-center mx-auto max-w-5xl pb-24 sm:pb-24 lg:pb-24">
          <h1 className="text-5xl font-bold tracking-tight text-balance dark:text-white sm:text-5xl">
            Why hire{" "}
            <span className="font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
              Me?
            </span>
          </h1>
          <h1 className="py-3.5 text-3xl font-bold tracking-tight text-balance text-gray-400 dark:text-white sm:text-4xl">
            A Foundation of Trust and Excellence
          </h1>
          <div className="text-lg font-normal text-pretty max-w-3xl mx-auto text-gray-600 sm:text-xl/8">
            As a steadfast learner with strong analytical skills, I have trained
            for 5 years in building full-stack web applications, APIs, and BI
            dashboards from start to finish. I have a problem-solving mindset
            and a proven ability to adapt to large-scale projects. Beyond my
            technical skills, I am a collaborative team player who knows how to
            work with others to meet business goals. I am the right fit if you
            are looking for someone who combines precision with a
            problem-solving mindset.
          </div>
          <div className="grid place-content-center lg:grid-cols-3 lg:gap-3 mt-14">
            <a
              href="#"
              className="max-w-sm p-6 mb-7 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 flex flex-column"
            >
              <FaArrowTrendUp
                size={70}
                color="ffffff"
                className="mr-3 border border-[#352e60] w-fit h-fit p-2 rounded bg-[#24244c]"
              />
              <div className="text-left">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  15+ Successful Projects
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  More than 15 personal and client projects architected and
                  delivered over the past 5 years.
                </p>
              </div>
            </a>

            <a
              href="#"
              className="max-w-sm p-6 mb-7 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 flex flex-column"
            >
              <GiOvermind
                size={70}
                color="ffffff"
                className="mr-3 border border-[#233869] w-fit h-fit p-2 rounded bg-[#181e42]"
              />
              <div className="text-left">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Trusted by collaborators
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Proven track record of collaborating with and delivering
                  solutions that meet clients goals.
                </p>
              </div>
            </a>

            <a
              href="#"
              className=" max-w-sm p-6 mb-7 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 flex flex-column"
            >
              <GiGraduateCap
                size={70}
                color="ffffff"
                className="mr-3 border border-[#50431e] w-fit h-fit p-2 rounded bg-[#24244c]"
              />
              <div className="text-left">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  MIAGE Graduated
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Graduate of the School of Mathematics and Computer Science at
                  FHB University.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
