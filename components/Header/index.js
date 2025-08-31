import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleExperienceScroll, handleProjectsScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme for more reliable theme detection
  const currentTheme = mounted ? (resolvedTheme || theme) : 'dark';

  return (
    <>
      <Popover className="block tablet:hidden mt-5 bg-white dark:bg-black">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0 bg-white dark:bg-black">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link bg-white dark:bg-black"
              >
                {name}.
              </h1>

              <div className="flex items-center bg-white dark:bg-black">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(currentTheme === "dark" ? "light" : "dark")
                    }
                    className="bg-white dark:bg-black"
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        currentTheme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button className="bg-white dark:bg-black">
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? currentTheme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : currentTheme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                currentTheme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleExperienceScroll}>Experience</Button>
                  <Button onClick={handleProjectsScroll}>Projects</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:aaryabrat@wustl.edu")
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:aaryabrat@wustl.edu")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:aaryabrat@wustl.edu")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky bg-white dark:bg-black ${
          currentTheme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0 bg-white dark:bg-black"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex bg-white dark:bg-black">
            <Button onClick={handleExperienceScroll}>Experience</Button>
            <Button onClick={handleProjectsScroll}>Projects</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:aaryabrat@wustl.edu")}>
              Contact
            </Button>
            {mounted && currentTheme && data.darkMode && (
              <Button
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${currentTheme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex bg-white dark:bg-black">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:aaryabrat@wustl.edu")}>
              Contact
            </Button>

            {mounted && currentTheme && data.darkMode && (
              <Button
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${currentTheme === "dark" ? "sun.svg" : "moon.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
