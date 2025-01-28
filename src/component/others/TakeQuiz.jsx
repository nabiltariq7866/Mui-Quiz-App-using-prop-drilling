import React, { useState, useMemo } from "react";
import Button from "@mui/material/Button";
import AllTask from "./AllTask";
import { useNavigate } from "react-router";
import didu9 from "../../assets/didu9.png";

const TakeQuiz = ({ adminQuestionCollection, setQuizData, quizData }) => {
  const [index, setIndex] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const sortedData = useMemo(() => {
    return [...adminQuestionCollection].sort((a, b) => {
      if (
        a.QuestionType === "MCQSQuestions" &&
        b.QuestionType !== "MCQSQuestions"
      )
        return -1;
      if (
        a.QuestionType !== "MCQSQuestions" &&
        b.QuestionType === "MCQSQuestions"
      )
        return 1;
      return 0;
    });
  }, [adminQuestionCollection]);

  const data = sortedData[index];
  const length = adminQuestionCollection.length - 1;

  const email = useMemo(() => {
    const loginData = localStorage.getItem("login");
    return loginData ? JSON.parse(loginData)?.email || "" : "";
  }, []);

  const calculateTotalScore = (questions) => {
    return questions.reduce((total, question) => {
      const score = question.isCorrect
        ? question.QuestionType === "MCQSQuestions"
          ? 10
          : 5
        : 0;
      return total + score;
    }, 0);
  };

  const handleNextQuestion = () => {
    setIndex((prev) => prev + 1);
    setAnswerSelected(false);
    setSelectedAnswer(null);
  };

  const handleFinalResult = () => {
    const temp = JSON.parse(localStorage.getItem("TempDatastore")) || [];
    const totalScore = calculateTotalScore(temp);

    const newQuiz = {
      quizid: Date.now(),
      quizTime: new Date().toISOString(),
      questions: temp,
      scoreCard: totalScore,
    };

    const existingUserQuizData = quizData.find((quiz) => quiz.email === email);

    if (existingUserQuizData) {
      setQuizData((prevQuizData) =>
        prevQuizData.map((quiz) =>
          quiz.email === email
            ? { ...quiz, quizzes: [...quiz.quizzes, newQuiz] }
            : quiz
        )
      );
    } else {
      setQuizData((prevQuizData) => [
        ...prevQuizData,
        { email, quizzes: [newQuiz] },
      ]);
    }

    localStorage.removeItem("TempDatastore");
    navigate("/Layout/FinalResult", { replace: true });
  };

  return (
    <>
      <div className="flex items-center">
        <img src={didu9} alt="" className="w-[11rem]" />
        <h1 className="text-3xl font-semibold">Your Question Space Here</h1>
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
