import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./component/Auth/ProtectedRoutes";
import Home from "./component/others/Home";
import AllQuestionAdmin from "./component/others/AllQuestionAdmin";
import CreateTask from "./component/others/CreateTask";
import FinalResult from "./component/others/FinalResult";
import AllQuizDetails from "./component/others/AllQuizDetails";
import TakeQuiz from "./component/others/TakeQuiz";
import Login from "./component/Auth/Login";
import Layout from "./component/Dashboard/Layout";
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
  const [adminQuestionCollection, setAdminQuestionCollection] = useState(
    getLocalStorage("AdminQuestionCollectin")
  );
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
      path: "/Layout",
      element: (
        <ProtectedRoutes
          Element={
            <Layout
              userData={userData} //needed
              setUserData={setUserData} //needed
            />
          }
          role={["user","admin"]}
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
            <ProtectedRoutes
              Element={
                <TakeQuiz
                  adminQuestionCollection={adminQuestionCollection} //needed
                  setQuizData={setQuizData} //needed
                  quizData={quizData}
                />
              }
              role={["user"]}
              userData={userData}
            />
          ),
        },
        {
          path: "FinalResult",
          element: (
            <ProtectedRoutes
              Element={<FinalResult />}
              role={["user"]}
              userData={userData}
            />
          ),
        },
        {
          path: "AllQuestionAdmin",
          element: (
            <ProtectedRoutes
              Element={
                <AllQuestionAdmin
                  adminQuestionCollection={adminQuestionCollection} //needed
                  userData={userData} //needed
                  setAdminQuestionCollection={setAdminQuestionCollection} //needed
                  quizData={quizData} //needed
                />
              }
              role={["admin"]}
              userData={userData}
            />
          ),
        },
        {
          path: "CreateQuestion",
          element: (
            <ProtectedRoutes
              Element={
                <CreateTask
                  setAdminQuestionCollection={setAdminQuestionCollection} //needed
                />
              }
              role={["admin"]}
              userData={userData}
            />
          ),
        },
        {
          path: "AllQuizDetails",
          element: (
            <ProtectedRoutes
              Element={<AllQuizDetails quizData={quizData} />}
              role={["admin"]}
              userData={userData}
            />
          ), //needed
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
