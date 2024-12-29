import React, { createContext, useState, useContext, useEffect } from "react";
import { IoContractOutline } from "react-icons/io5";

const AppContext = createContext({
  userData: [],
  setUserData: () => {},
  correctAnswer: "",
  setLocalStorage: () => {},
  getLocalStorage: () => {},
  setCorrectAnswer: () => {},
  setAdminQuestionCollection: () => {},
  adminQuestionCollection: [],
  setaddInput: () => {},
  addInput: [],
  editAddInput: [],
  isOpen: false,
  setIsOpen: () => {},
  setEditAddInput: () => {},
  setUserHistoryData: () => {},
  userHistoryData: [],
  setUserHistoryIndex:()=>{},
  userHistoryIndex:"",
  setQuizData:()=>{},
  setNavOpen:()=>{},
  quizData:[],
  navOpen:[]
});
function setLocalStorage(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}

function getLocalStorage(name,open) {
  const localTodos = localStorage.getItem(name);
  return JSON.parse(localTodos) || [];
}

export const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState(getLocalStorage("login"));
  const [userHistoryData, setUserHistoryData] = useState(
    getLocalStorage("userHistory")
  );
  const [userHistoryIndex, setUserHistoryIndex] = useState("");
  const [quizData, setQuizData] =useState(getLocalStorage("quizData"));
  const [isOpen, setIsOpen] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const [adminQuestionCollection, setAdminQuestionCollection] = useState(
    getLocalStorage("AdminQuestionCollectin")
  );
  const [addInput, setaddInput] = useState([""]);
  const [editAddInput, setEditAddInput] = useState([""]);
  const [navOpen, setNavOpen] = useState(getLocalStorage("NavOpen"))
  useEffect(() => {
    setLocalStorage("AdminQuestionCollectin", adminQuestionCollection);
  }, [adminQuestionCollection]);
  useEffect(() => {
    setLocalStorage("login", userData);
    const userHistoryIndex = userHistoryData.findIndex(
      (entry) => entry.email === userData.email
    );
   setUserHistoryIndex(userHistoryIndex)
  }, [userData]);
  useEffect(() => {
    setLocalStorage("userHistory", userHistoryData);

  }, [userHistoryData]);
  useEffect(() => {
    setLocalStorage("NavOpen", navOpen);

  }, [navOpen]);
  useEffect(() => {
    setLocalStorage("quizData", quizData);

  }, [quizData]);

  const setUser = (data) => {
    setUserData(data);
  };

  const passData = {
    userData,
    setUserData,
    setLocalStorage,
    getLocalStorage,
    setCorrectAnswer,
    correctAnswer,
    setAdminQuestionCollection,
    adminQuestionCollection,
    addInput,
    setaddInput,
    isOpen,
    setIsOpen,
    editAddInput,
    setEditAddInput,
    setUserHistoryData,
    userHistoryData,
    userHistoryIndex,
    setUserHistoryIndex,
    quizData,
    setQuizData,
    setNavOpen,
    navOpen
  };

  return <AppContext.Provider value={passData}>{children}</AppContext.Provider>;
};

export default AppContext;