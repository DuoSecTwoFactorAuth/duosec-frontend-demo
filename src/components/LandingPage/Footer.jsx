import React from "react";

const Footer = () => {
  return (
    <footer className="w-full justify-center items-center bg-[#474554] text-center text-white lg:text-left">
      <div className="text-white text-center p-10 text-xl">
        ©Copyright :
        <a
          className="text-white"
          href="https://www.vit.edu"
          target="_blank"
          rel="noreferrer noopener"
        >
          &nbsp;VIT PUNE &#124; All rights reserved &#124; Terms Of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;