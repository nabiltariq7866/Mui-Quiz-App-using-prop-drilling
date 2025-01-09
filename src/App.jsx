import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import ProtectedRoutes from "./component/Auth/ProtectedRoutes";
import Home from "./component/others/Home";
import AllQuestionAdmin from "./component/others/AllQuestionAdmin";
import CreateTask from "./component/others/CreateTask";
import FinalResult from "./component/others/FinalResult";
import AllQuizDetails from "./component/others/AllQuizDetails";
import TakeQuiz from "./component/others/TakeQuiz";
import Login from "./component/Auth/Login";
function setLocalStorage(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}
function getLocalStorage(name) {
  const localTodos = localStorage.getItem(name);
  return JSON.parse(localTodos) || [];
}
function App() {
  const [userData, setUserData] = useState(getLocalStorage("login"));
  const [quizData, setQuizData] = useState(getLocalStorage("quizData"));
  const [adminQuestionCollection, setAdminQuestionCollection] = useState( getLocalStorage("AdminQuestionCollectin"));
  useEffect(() => {
    setLocalStorage("AdminQuestionCollectin", adminQuestionCollection);
  }, [adminQuestionCollection]);
  useEffect(() => {
    setLocalStorage("login", userData);
  }, [userData]);
  useEffect(() => {
    setLocalStorage("quizData", quizData);
  }, [quizData]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login setUserData={setUserData} />,
    },
    {
      path: "/EmployeeDashboard",
      element: (
        <ProtectedRoutes
          Element={
            <EmployeeDashboard
              userData={userData} //needed
              setUserData={setUserData} //needed
            />
          }
          role={["user"]}
          userData={userData}
        />
      ),
      children: [
        {
          index: true,
          element: <Home userData={userData} />, //needed
        },
        {
          path: "TakeQuiz",
          element: (
            <TakeQuiz
              adminQuestionCollection={adminQuestionCollection} //needed
              setQuizData={setQuizData} //needed
              quizData={quizData}
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
        <ProtectedRoutes
          Element={
            <AdminDashboard userData={userData} setUserData={setUserData} /> //needed
          }
          role={["admin"]}
          userData={userData} //needed
        />
      ),
      children: [
        {
          index: true,
          element: <Home userData={userData} />, //needed
        },
        {
          path: "AllQuestionAdmin",
          element: (
            <AllQuestionAdmin
              adminQuestionCollection={adminQuestionCollection}//needed
              userData={userData}//needed
              setAdminQuestionCollection={setAdminQuestionCollection}//needed
              quizData={quizData}//needed
            />
          ),
        },
        {
          path: "CreateQuestion",
          element: (
            <CreateTask
              setAdminQuestionCollection={setAdminQuestionCollection}//needed
            />
          ),
        },
        {
          path: "AllQuizDetails",
          element: <AllQuizDetails quizData={quizData} />,//needed
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
