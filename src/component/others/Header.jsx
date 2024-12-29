import React, { useContext } from "react";
import AppContext from "../../context/AuthContext";
import image from "../../assets/QuizLogo.png";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
const Header = () => {
  const context = useContext(AppContext);
  const userData = context.getLocalStorage("login");
  let userName = userData.email.split("@")[0];
  userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
  function handleLogout() {
    context.setUserData({ login: false });
    context.setLocalStorage("login", { login: false });
  }
 
  return (
    <div className="flex items-center justify-between ">
      <div className="flex gap-2">
        <div className="text-2xl flex items-center justify-center font-medium w-[100px] h-[100px] rounded-full bg-[#ED4ABE] shadow-md">
          <h1 className="flex items-center justify-center flex-col">
            <p className="ml-[-12px]">QUIZ</p>{" "}
            <p className="ml-[15px] mt-[-5px]">App</p>
          </h1>
        </div>
        <h1 className="text-2xl font-medium mt-3 text-[#ED4ABE]  ">
          Hi, <br />
          <span className="text-4xl font-semibold text-[#ED4ABE] ">
            {userName}
          </span>
        </h1>
      </div>
      <div className="flex gap-3">
        {context.userData.role === "admin" ? (
          <>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  { "bg-[#ED4ABE] text-white   ": isActive },
                  "text-2xl font-semibold rounded hover:text-white  hover:bg-[#ED4ABE] p-2",
                  { "text-[#ED4ABE]": !isActive }
                )
              }
              to=""
              end
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  { "bg-[#ED4ABE] text-white   ": isActive },
                  "text-2xl font-semibold rounded hover:text-white  hover:bg-[#ED4ABE] p-2",
                  { "text-[#ED4ABE]": !isActive }
                )
              }
              to="AllQuestionAdmin"
              end
            >
              All Question
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  { "bg-[#ED4ABE] text-white   ": isActive },
                  "text-2xl font-semibold rounded hover:text-white  hover:bg-[#ED4ABE] p-2",
                  { "text-[#ED4ABE]": !isActive }
                )
              }
              to="CreateQuestion"
            >
              Add Question
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  { "bg-[#ED4ABE] text-white   ": isActive },
                  "text-2xl font-semibold rounded hover:text-white  hover:bg-[#ED4ABE] p-2",
                  { "text-[#ED4ABE]": !isActive }
                )
              }
              to="AllQuizDetails"
            >
              All Result
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  { "bg-[#ED4ABE] text-white   ": isActive },
                  "text-2xl font-semibold rounded hover:text-white  hover:bg-[#ED4ABE] p-2",
                  { "text-[#ED4ABE]": !isActive }
                )
              }
              to=""
              end
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  { "bg-[#ED4ABE] text-white   ": isActive },
                  "text-2xl font-semibold rounded hover:text-white  hover:bg-[#ED4ABE] p-2",
                  { "text-[#ED4ABE]": !isActive }
                )
              }
              to="AllQuestionAdmin"
            >
              Take Quiz
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  { "bg-[#ED4ABE] text-white   ": isActive },
                  "text-2xl font-semibold rounded hover:text-white  hover:bg-[#ED4ABE] p-2",
                  { "text-[#ED4ABE]": !isActive }
                )
              }
              to="FinalResult"
            >
              Final Result
            </NavLink>
          </>
        )}
      </div>
      <button
        onClick={handleLogout}
        className="bg-[#ED4ABE] text-white px-5 py-2 rounded-sm text-lg font-medium shadow-text-outline"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
