import { useRef } from "react";
import Header from "../components/Header";
import ExperienceCard from "../components/ExperienceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const projectsRef = useRef();
  const experienceRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleProjectsScroll = () => {
    window.scrollTo({
      top: projectsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleExperienceScroll = () => {
    window.scrollTo({
      top: experienceRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-200 ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10 bg-white dark:bg-black">
        <Header
          handleExperienceScroll={handleExperienceScroll}
          handleProjectsScroll={handleProjectsScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10 bg-white dark:bg-black">
          <div className="mt-5 bg-white dark:bg-black">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 bg-white dark:bg-black"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 bg-white dark:bg-black"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 bg-white dark:bg-black"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 bg-white dark:bg-black"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5 bg-white dark:bg-black" />
        </div>
        
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0 bg-white dark:bg-black" data-section="experience" ref={experienceRef}>
          <h1 className="text-2xl text-bold bg-white dark:bg-black">Experience.</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 laptop:grid-cols-2 gap-6 bg-white dark:bg-black">
            {data.experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                name={experience.title}
                description={experience.description}
                company={experience.company}
                dateRange={experience.dateRange}
              />
            ))}
          </div>
          <div className="mt-8 text-center bg-white dark:bg-black">
            <p className="text-lg opacity-70">
              View my{" "}
              <a
                href="https://www.linkedin.com/in/aaryabrat-chhatkuli/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                LinkedIn
              </a>{" "}
              for more
            </p>
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0 bg-white dark:bg-black" ref={projectsRef}>
          <h1 className="text-2xl text-bold bg-white dark:bg-black">Projects.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 bg-white dark:bg-black">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.image}
                name={project.title}
                description={project.description}
                languages={project.languages}
                githubUrl={project.githubUrl}
                onClick={() => window.open(project.githubUrl)}
              />
            ))}
          </div>
          <div className="mt-8 text-center bg-white dark:bg-black">
            <p className="text-lg opacity-70">
              View my{" "}
              <a
                href="https://github.com/chhateauuu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                GitHub
              </a>{" "}
              for more
            </p>
          </div>
        </div>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0 bg-white dark:bg-black" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold bg-white dark:bg-black">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5 bg-white dark:bg-black">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
