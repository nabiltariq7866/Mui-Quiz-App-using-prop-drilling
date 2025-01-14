import React, { useState } from "react";
import Button from "@mui/material/Button";
import AllTask from "./AllTask";
import { useNavigate } from "react-router";
import didu9 from "../../assets/didu9.png";
const TakeQuiz = ({
  adminQuestionCollection,
  setQuizData,
  quizData
}) => {
  const [index, setIndex] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();
  const sortedData = [...adminQuestionCollection].sort((a, b) => {
    if (a.QuestionType === "MCQSQuestions" && b.QuestionType !== "MCQSQuestions") return -1;
    if (a.QuestionType !== "MCQSQuestions" && b.QuestionType === "MCQSQuestions") return 1;
    return 0;
  });
  console.log(sortedData)
  let data = sortedData[index];
  const length = adminQuestionCollection.length - 1;
  let email = localStorage.getItem("login");
  email=JSON.parse(email) || [];
  email=email.email;

  const handleNextQuestion = () => {
    if (answerSelected) {
      setIndex((prev) => prev + 1);
      setAnswerSelected(false);
      setSelectedAnswer(null); 
    } else {
      alert("Please select an answer before moving to the next question.");
    }
  };
  function handleFinalResult() {
    let totalScore = 0;
    const temp = JSON.parse(localStorage.getItem("TempDatastore")) || [];
    let login = JSON.parse(localStorage.getItem("login")) || {}; 
    temp.forEach((question) => {
      let questionScore = 0;
      if (question.isCorrect) {
        questionScore = question.QuestionType === "MCQSQuestions" ? 10 : 5;
      }
      totalScore += questionScore;
    });

    console.log(totalScore);

    const newQuiz = {
      quizid: Date.now(),
      quizTime: new Date().toISOString(),
      questions: temp,
      scoreCard: totalScore,
    };
    console.log(newQuiz)



    const existingUserQuizData = quizData.find(
      (quiz) => quiz.email === login.email
    );

    if (existingUserQuizData) {
      setQuizData((prevQuizData) =>
        prevQuizData.map((quiz) =>
          quiz.email === login.email
            ? { ...quiz, quizzes: [...quiz.quizzes, newQuiz] }
            : quiz
        )
      );
    } else {
      setQuizData((prevQuizData) => [
        ...prevQuizData,
        { email: login.email, quizzes: [newQuiz] },
      ]);
    }
   
    localStorage.removeItem("TempDatastore");

    navigate("/Layout/FinalResult", { replace: true });
  }
  return (
    <>
      <div className="flex items-center">
        <img src={didu9} alt="" className="w-[11rem]" />
        <h1 className="text-3xl font-semibold">Your Question space Here</h1>
      </div>
      {data ? (
        <div className="flex flex-col items-center mt-[-2rem]">
          <AllTask
            data={data}
            index={index}
            setAnswerSelected={setAnswerSelected}
            setSelectedAnswer={setSelectedAnswer}
            selectedAnswer={selectedAnswer}
          />
          {index < length ? (
            <Button
              variant="contained"
              onClick={handleNextQuestion}
              disabled={!answerSelected}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              disabled={!answerSelected}
              onClick={handleFinalResult}
            >
              Submit
            </Button>
          )}
        </div>
      ) : (
        <h1 className="text-center my-5 text-2xl text-[#43b5a0] font-sans font-semibold">
          No Question Yet
        </h1>
      )}
    </>
  );
};

export default TakeQuiz;
