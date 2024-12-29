import React, { useContext, useState } from "react";
import AppContext from "../../context/AuthContext";
import { useNavigate, replace } from "react-router-dom";
import wellcome1 from "../../assets/welcome1.png";
import login from "../../assets/login.png";
import { MdAttachEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
const Login = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  function hanldeSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    let loginData;
    if (data.email === "nabiltariq7866@gmail.com") {
      loginData = {
        ...data,
        role: "admin",
        login: true,
      };
      context.setUserData(loginData);
      navigate("/AdminDashboard", replace);
    } else {
      loginData = {
        ...data,
        role: "user",
        login: true,
      };
      const emailExists = context.userHistoryData.some(
        (item) => item.email === data.email
      );
      if (!emailExists) {
        context.setUserHistoryData((prev) => [
          ...prev,
          { email: data.email, questions: [] },
        ]);
      }

      context.setUserData(loginData);
      navigate("/EmployeeDashboard", replace);
    }
    context.setIsOpen(false);
  }
  return (
    <div className="shadow-lg w-[60rem] flex items-center h-[35rem] bg-white p-20 rounded-lg">
      <div className="w-1/2 h-full">
        <img src={login} alt="" />
      </div>
      <div className="w-1/2 h-full flex flex-col items-center mt-[-5rem]">
        <div className="w-[12rem]">
          <img src={wellcome1} alt="" />
        </div>
        <form
          onSubmit={hanldeSubmit}
          className="flex flex-col gap-2 justify-center items-center"
        >
          <div className="border-[#1976D2] border-2 rounded-full overflow-hidden flex w-full it items-center">
            <p className="py-3 pl-5 pr-3">
              <MdAttachEmail style={{ color: "#6D7073" }} />
            </p>
            <input
              className="placeholder:text-gray-400 w-full  text-sm   outline-none  bg-transparent py-3 px-5"
              type="email"
              placeholder="Enter your Email"
              required
              name="email"
            />
          </div>
          <div className="border-[#1976D2] overflow-hidden border-2 rounded-full flex w-full it items-center">
            <p className="py-3 pl-5 pr-3">
              <TbLockPassword style={{ color: "#6D7073" }} />
            </p>
            <input
              className="placeholder:text-gray-400   text-sm w-full  outline-none  bg-transparent    py-3 px-5"
              type="password"
              placeholder="Enter your Password"
              required
              name="password"
            />
          </div>
          <button className="placeholder:text-white text-xl outline-none  bg-[#1976D2] text-white rounded-full py-3 px-5 w-[180px]">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
