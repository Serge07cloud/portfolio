import Welcome from "./welcome";
import Projects from "./projects";
import Experience from "./experience";
import ReachMe from "./reachMe";

const Main = () => {
  return (
    <>
      <div className="isolate dark:bg-gray-900 overflow-x-hidden">
        <Welcome />
        <Projects />
        <Experience />
        <ReachMe />
      </div>
    </>
  );
};

export default Main;
