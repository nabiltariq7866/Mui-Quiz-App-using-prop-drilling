import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AuthContext";
import AllTask from "./AllTask";
import { useNavigate, replace } from "react-router-dom";
import Modal from "./Modal";
import ChartBar from "./ChartBar";
const AllQuestionAdmin = () => {
  const context = useContext(AppContext);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [chartData, setChartData] = useState({});
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
   
    {
      chartData && console.log("Chart data updated: ", chartData);
    }
  }, [chartData]);

  useEffect(() => {
    if (
      context.userHistoryIndex !== -1 &&
      context.userHistoryData?.[context.userHistoryIndex]
    ) {
      const answeredQuestions =
        context.userHistoryData[context.userHistoryIndex].questions.length || 0;
      const totalQuestions = context.adminQuestionCollection.length || 0;
      setIsSubmitEnabled(answeredQuestions === totalQuestions);
    }
  }, [
    context.userHistoryData,
    context.adminQuestionCollection,
    context.userHistoryIndex,
    context.userData.email,
  ]);
 
  function handleFinalResult() {
    console.log("click");

    if (
      context.userHistoryIndex === -1 ||
      !context.userHistoryData?.[context.userHistoryIndex]
    ) {
      console.error("Invalid user history index or data.");
      return;
    }

    let totalScore = 0;
    const temp = context.userHistoryData[context.userHistoryIndex];

    temp.questions.forEach((question) => {
      let questionScore = 0;
      if (question.isCorrect) {
        questionScore = question.QuestionType === "mcqs" ? 10 : 5;
      }
      totalScore += questionScore;
    });

    console.log(totalScore);

    const newQuiz = {
      quizid: Date.now(),
      quizTime: new Date().toISOString(),
      Questions: temp.questions,
      scoreCard: totalScore,
    };

    context.setUserHistoryData((prev) => {
      const updatedHistory = [...prev];
      updatedHistory[context.userHistoryIndex] = {
        ...updatedHistory[context.userHistoryIndex],
        scoreCard: totalScore,
      };
      return updatedHistory;
    });

    const existingUserQuizData = context.quizData.find(
      (quiz) => quiz.email === temp.email
    );

    if (existingUserQuizData) {
      context.setQuizData((prevQuizData) =>
        prevQuizData.map((quiz) =>
          quiz.email === temp.email
            ? { ...quiz, quizzes: [...quiz.quizzes, newQuiz] }
            : quiz
        )
      );
    } else {
      context.setQuizData((prevQuizData) => [
        ...prevQuizData,
        { email: temp.email, quizzes: [newQuiz] },
      ]);
    }

    navigate("/EmployeeDashboard/FinalResult", { replace: true });
  }

  function handleChartItem(data) {
    console.log("Eye Click");
    console.log(data);
    setChartData(data);
    setActiveModal("chart");
    context.setIsOpen(true);
  }

  return (
    <>
      <div className="flex  flex-wrap w-full   justify-evenly">
        {context.adminQuestionCollection.length > 0||context.userData.role === "admin" ? (
          context.adminQuestionCollection.map((value, index) => (
            <AllTask
              key={value.id}
              index={index}
              data={value}
              handleChartItem={handleChartItem}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
            />
          ))
        ) : (
          <h1 className="text-[8rem] mt-16 text-green-600">No Question Yet</h1>
        )}
      </div>
      {context.userData.role === "user" &&
        context.adminQuestionCollection.length > 0 && (
          <div className="flex  bg-red-200 items-center justify-center">


            {/* <button
              onClick={handleFinalResult}
              disabled={!isSubmitEnabled}
              className={`bg-[#21888e] ${
                isSubmitEnabled
                  ? "opacity-100 "
                  : "opacity-40 cursor-not-allowed"
              }  text-white px-5 py-2 rounded-sm text-lg font-medium mt-3  `}
            >
              Submit
            </button> */}
          </div>
        )}
      {activeModal === "chart" && (
        <Modal>
          <ChartBar data={chartData} />
        </Modal>
      )}
    </>
  );
};

export default AllQuestionAdmin;
