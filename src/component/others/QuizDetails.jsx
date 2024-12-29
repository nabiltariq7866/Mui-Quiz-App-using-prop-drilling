import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AuthContext";
import SelectedQuizdetail from "./SelectedQuizdetail";
import Modal from "./Modal";

const QuizDetails = ({ selectedQuiz, setSelectedQuiz }) => {
  const context = useContext(AppContext);
  const [selectedQuizdetail, setselectedQuizdetail] = useState(null);
  useEffect(() => {
    setselectedQuizdetail(null);
  }, [selectedQuiz]);
  function handleSetReault(quizDetails) {
    setselectedQuizdetail(quizDetails);
    context.setIsOpen(true);
  }
  return (
    <div className="mt-4 bg-[#3B8AD9] w-[140%] overflow-y-auto h-[80vh] z-10 p-4 rounded-md">
      <h2 className="text-xl font-bold bg-white text-[#1976D2] p-4 rounded-md mb-3">
        Quiz Details for {selectedQuiz.email}
      </h2>
      <ul>
        {selectedQuiz.quizzes.map((quiz, index) => {
          return (
            <ul key={index}>
              <p className="my-2 text-white">
                <strong className="text-xl font-bold mr-2 bg-[#1976D2] text-white p-1 rounded-md">
                  Quiz Time:
                </strong>
                {quiz.quizTime}
              </p>
              <p className=" text-white">Score : {quiz.scoreCard}</p>
              <button
                type="button"
                className="bg-[#1976D2] my-1 text-white px-3 py-2 rounded-md text-[12px] font-semibold"
                onClick={() => handleSetReault(quiz)}
              >
                See result
              </button>
              {selectedQuizdetail && (
                <Modal
                  setSelectedQuiz={setSelectedQuiz}
                  setselectedQuizdetail={setselectedQuizdetail}
                >
                  <SelectedQuizdetail selectedQuiz={selectedQuizdetail} />
                </Modal>
              )}
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizDetails;
