import React from "react";
import LoginForm from "../../components/LandingPage/Login.jsx";

const Home = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-1/2 flex flex-col items-center justify-around">
        <h1 className="text-6xl text-[#0F0F10] font-medium ml-[-9.25rem] mb-8">
          Project Hub
        </h1>
        <div className="border-l-4 border-[gray] border-solid">
          <h3 className="pt-3 ml-5 text-2xl text-[#40394A] font-bold">
            All in one portal for projects
          </h3>
          <p className="pb-3 mt-5 ml-5 text-2xl font-light">
            Project submission and assement portal for <br />
            <span>students and professors</span>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};

export default Home;