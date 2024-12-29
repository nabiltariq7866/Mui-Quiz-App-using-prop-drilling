import React from "react";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./component/Auth/ProtectedRoutes";
import Home from "./component/others/Home";
import AllQuestionAdmin from "./component/others/AllQuestionAdmin";
import CreateTask from "./component/others/CreateTask";
import FinalResult from "./component/others/FinalResult";
import AllQuizDetails from "./component/others/AllQuizDetails";
import Home1 from "./component/others/Home1";
import TakeQuiz from "./component/others/TakeQuiz";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/EmployeeDashboard",
      element: (
        <ProtectedRoutes Element={<EmployeeDashboard />} role={["user"]} />
      ),
      children: [
        {
          index: true,
          element: <Home1 />,
        },
        {
          path: "TakeQuiz",
          element: (
            <ProtectedRoutes
              Element={<TakeQuiz />}
              role={["admin", "user"]}
            />
          ),
        },
        {
          path: "FinalResult",
          element: <FinalResult />,
        },
      ],
    },
    {
      path: "/AdminDashboard",
      element: (
        <ProtectedRoutes Element={<AdminDashboard />} role={["admin"]} />
      ),
      children: [
        {
          index: true,
          element: <Home1 />,
        },
        ,
        {
          path: "AllQuestionAdmin",
          element: (
            <ProtectedRoutes
              Element={<AllQuestionAdmin />}
              role={["admin", "user"]}
            />
          ),
        },
        {
          path: "CreateQuestion",
          element: (
            <ProtectedRoutes Element={<CreateTask />} role={["admin"]} />
          ),
        },
        {
          path: "AllQuizDetails",
          element: (
            <ProtectedRoutes Element={<AllQuizDetails />} role={["admin"]} />
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
