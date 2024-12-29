import React, { useContext, useState } from "react";
import AppContext from "../../context/AuthContext";
import QuizDetails from "./QuizDetails";
import Modal from "./Modal";
import result from "../../assets/result1.png";

const AllQuizDetails = () => {
  const context = useContext(AppContext);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  function handleButtonClick(email) {
    setSelectedQuiz(email);
    context.setIsOpen(true);
  }
  return (
    <>
      <div className="flex items-center text-3xl">
        <img src={result} alt="" className="w-[10rem] -mt-7" />
        <h1>Your All Candidates Result is Here</h1>
      </div>

      <div className="max-w-[450px] penal1 min-h-52 bg-transparent  shadow-2xl  p-6 m-auto flex flex-col items-start mt-[90px] rounded-md ">
        {context.quizData.length === 0 ? (
          <h1>No Quiz Yet</h1>
        ) : (
          context.quizData.map((quiz) => (
            <button
              onClick={() => handleButtonClick(quiz)}
              className="underline  text-black p-2 text-3xl rounded-md mb-2 text-left w-full"
            >
              {quiz.email}
            </button>
          ))
        )}
        {selectedQuiz && (
          <Modal>
            <QuizDetails
              selectedQuiz={selectedQuiz}
              setSelectedQuiz={setSelectedQuiz}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default AllQuizDetails;
