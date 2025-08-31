import React from "react";
import Socials from "../Socials";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0 bg-white dark:bg-black">
        <div className="mt-10 bg-white dark:bg-black">
          <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0 bg-white dark:bg-black">
        Made With ❤️ by Aarya
      </h1>
    </>
  );
};

export default Footer;
