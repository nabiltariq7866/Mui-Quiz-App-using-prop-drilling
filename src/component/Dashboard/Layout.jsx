import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar2 from "../others/NavBar2";
const Layout = ({ userData, setUserData }) => {
  return (
    <>
    <div className="py-16 min-h-screen flex flex-col w-[1423px] mt-2 m-auto box-border">
      <NavBar2 userData={userData} setUserData={setUserData} />
      <div className="bg-white ml-[-6px] mt-3 rounded-3xl w-full m-auto box-border px-1 overflow-hidden">
      <div className="w-full  h-[90vh] pr-2 overflow-y-auto box-border px-2 scroll-style">
        <Outlet />
      </div>
      </div>
    </div>
  </>
  )
}

export default Layout
