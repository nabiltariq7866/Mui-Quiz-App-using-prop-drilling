import { DashboardLayout } from "@toolpad/core";
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default Layout;
