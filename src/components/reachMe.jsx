const ReachMe = () => {
  return (
    <>
      <div className="text-center mx-auto max-w-5xl pb-48 sm:pb-48 lg:pb-48">
        <h1 className="text-5xl font-bold tracking-tight text-balance dark:text-white sm:text-7xl">
          Do you have{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 block">
            a project in mind ?
          </span>
        </h1>
        <div className="text-lg font-normal py-5 text-pretty max-w-3xl mx-auto text-gray-400 sm:text-xl/8">
          I'm currently open to new opportunities and collaborations. Whether
          you have a project in mind, a question, or just want to say hi, my
          inbox is always open. I'll try my best to get back to you!
        </div>
        <a
          href="#"
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 font-medium text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-xl my-5"
        >
          Get in touch
        </a>
      </div>
    </>
  );
};

export default ReachMe;
