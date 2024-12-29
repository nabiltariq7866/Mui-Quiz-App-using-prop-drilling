import React from "react";
import Header from "../others/Header";
import { Outlet } from "react-router-dom";
import NavBar2 from "../others/NavBar2";
import { Box } from "@mui/material";
import SideNev from "../others/SideNev";
const AdminDashboard = ({ children }) => {
  return (
   <>
      <NavBar2/>
      <Box sx={{ display: "flex",marginTop:"4rem" }}>
        <SideNev/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet/>
        </Box>
      </Box>
      </>
  
  );
};

export default AdminDashboard;
