import TypeIt from "typeit-react";

const ReachMe = () => {
  return (
    <>
      <div
        id="contact"
        className="text-center mx-auto max-w-6xl pb-48 sm:pb-48 lg:pb-48"
      >
        <h1 className="text-5xl font-bold tracking-tight text-balance dark:text-white sm:text-7xl">
          <TypeIt
            options={{
              cursor: false,
            }}
          >
            Do you have{" "}
          </TypeIt>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .pause(1200)
                .type("a projcet")
                .pause(750)
                .delete(3)
                .pause(500)
                .type("ect in mind ?");

              return instance;
            }}
            className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 block"
          ></TypeIt>
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
          className="text-lg font-normal text-pretty max-w-3xl mx-auto text-gray-400 sm:text-xl/8 my-8"
        >
          I'm currently open to new opportunities and collaborations. Whether
          you have a project in mind, a question, or just want to say hi, my
          inbox is always open. I'll try my best to get back to you!
        </div>
        <a
          href="#"
          className="rounded bg-indigo-500 px-3.5 py-2.5 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-xl font-semibold tracking-tight animate-pulse"
        >
          Get in touch
        </a>
      </div>
    </>
  );
};

export default ReachMe;
