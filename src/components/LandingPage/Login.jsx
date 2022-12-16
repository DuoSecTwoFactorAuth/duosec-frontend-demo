import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import loginShadow from "../../assets/login-shadow.svg";
import showPasswordLogo from "../../assets/show-password.svg";
import hidePasswordLogo from "../../assets/hide-password.svg";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [userPayload, setUserPayload] = useState({
    username: "",
    password: "",
    role: "employee",
  });

  const [errors, setErrors] = useState({});

  const onInputChange = (event) => {
    setUserPayload((previousState) => {
      return { ...previousState, [event.target.name]: event.target.value };
    });
  };

  const handleUserRole = (role) => {
    setUserPayload({ username: "", password: "", role: role });

    setErrors({});
  };

  const handleShowOrHidePassword = () => {
    setShowPassword((previousState) => !previousState);
  };

  const handleUserLoginSubmission = (event) => {
    event.preventDefault();

    setErrors(validateUserLoginInfo(userPayload));

    if (Object.keys(validateUserLoginInfo(userPayload)).length === 0) {
      if (userPayload.role === "employee") {
        handleUserLogin(
          routes.landingPage.studentLoginUrl,
          userPayload,
          setErrors
        );
      } else if (userPayload.role === "admin") {
        handleUserLogin(
          routes.landingPage.teacherLoginUrl,
          userPayload,
          setErrors
        );
      } 
    }
  };

  return (
    <div className="lg:h-screen flex flex-wrap items-center bg-[#F4F7FF]">
      <div className="w-full px-4">
        <img
          src={loginShadow}
          alt="login img"
          className="w-[30rem] absolute top-40 right-20"
        />
        <div className="max-w-[525px] mx-auto text-center bg-[#DCD6F7] rounded-lg relative top-20 overflow-hidden py-16 px-10 sm:px-12 md:px-[60px]">
          <div className="flex flex-row justify-between mb-6 md:mb-14">
            <button
              onClick={() => handleUserRole("student")}
              className={`w-1/3 px-2 py-1 rounded-bl-2xl ${
                userPayload.role === "student" ? "bg-[#ACA9BB]" : "bg-[#F4EEFF]"
              } hover:bg-[#CBB4F6] active:bg-white focus:bg-[#ACA9BB] text-black text-xl font-regular`}
            >
              Employee
            </button>
            <button
              onClick={() => handleUserRole("admin")}
              className={`w-1/3 px-2 py-1 rounded-br-2xl ${
                userPayload.role === "admin" ? "bg-[#ACA9BB]" : "bg-[#F4EEFF]"
              } hover:bg-[#CBB4F6] active:bg-white focus:bg-[#ACA9BB] text-black text-xl font-regular`}
            >
              Admin
            </button>
          </div>
          <form onSubmit={handleUserLoginSubmission}>
            <div className="mb-10">
              <label
                htmlFor="username"
                className="inline-block w-full text-left mb-1"
              >
                {userPayload.role === "student" ? "GR/PR No" : "Emp No"}
              </label>
              <input
                type="text"
                placeholder={
                  userPayload.role === "student"
                    ? "Enter your GR/PR No"
                    : "Enter your Emp No"
                }
                id="username"
                name="username"
                value={userPayload.username}
                onChange={onInputChange}
                className="w-full rounded-md border border-[#E9EDF4] py-3 px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] focus-visible:shadow-none focus:border-primary"
              />
              {errors.username && (
                <p className="text-left ml-2 mt-3 text-[red]">
                  {errors.username}
                </p>
              )}
            </div>
            <div className="mb-10">
              <label
                htmlFor="password"
                className="inline-block w-full text-left mb-1"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                id="password"
                name="password"
                value={userPayload.password}
                onChange={onInputChange}
                className="w-full rounded-md border border-[#E9EDF4] py-3 px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] focus-visible:shadow-none focus:border-primary"
              />
              <button
                type="button"
                onClick={handleShowOrHidePassword}
                className="absolute right-20 h-[3.4rem]"
              >
                <img
                  src={showPassword ? showPasswordLogo : hidePasswordLogo}
                  alt={
                    showPassword
                      ? "password is visible"
                      : "password is not visible"
                  }
                  width="32px"
                  height="32px"
                />
              </button>
              {errors.password && (
                <p className="text-left ml-2 mt-3 text-red-500">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="mb-10">
              <button
                type="submit"
                className="w-full h-full rounded-md border border-primary py-3 px-5 bg-primary text-base bg-[#5C5CC0] text-white cursor-pointer hover:bg-opacity-90 transition"
              >
                Sign In
              </button>
            </div>
          </form>
          <Link to="/forgot-password">
            <span className="inline-block w-full text-right mb-2 font-bold text-[#423f3f8a] hover:underline hover:text-primary">
              Forgot Password?
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;