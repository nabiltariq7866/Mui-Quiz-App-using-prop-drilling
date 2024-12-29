import React from "react";
import Header from "../others/Header";
import { Outlet } from "react-router-dom";
import SideNev from "../others/SideNev";
import Home1 from "../others/Home1";
import NavBar2 from "../others/NavBar2";
import { Box } from "@mui/material";
const EmployeeDashboard = () => {
  return (
    <div>
      <NavBar2 />
      <Box sx={{ display: "flex", marginTop: "4rem" }}>
        <SideNev />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default EmployeeDashboard;
