import QuizDetails from "./QuizDetails";
import Modal from "./Modal";
import result from "../../assets/result1.png";
import { useState } from "react";

const AllQuizDetails = ({
  quizData,
}) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [modal, setModal] = useState(false);
    console.log(modal)
  function handleButtonClick(email) {
    console.log(email)
    setSelectedQuiz(email);
    setModal(true);
  }
  return (
    <>
      <div className="flex items-center text-3xl">
        <img src={result} alt="" className="w-[10rem] -mt-7" />
        <h1>Your All Candidates Result is Here</h1>
      </div>

      <div className="max-w-[650px] penal1 min-h-[16rem] bg-transparent  shadow-2xl  p-6 m-auto flex flex-col items-start mt-[90px] rounded-md ">
        {quizData.length === 0 ? (
          <h1>No Quiz Yet</h1>
        ) : (
          quizData.map((quiz) => (
            <button
              onClick={() => handleButtonClick(quiz)}
              className="underline  text-black p-2 text-3xl rounded-md mb-2 text-left w-full"
            >
              {quiz.email}
            </button>
          ))
        )}
        {selectedQuiz && (
          <Modal
            setModal={setModal}
            modal={modal}
          >
            <QuizDetails
              selectedQuiz={selectedQuiz}
              setSelectedQuiz={setSelectedQuiz}
              setModal={setModal}
              modal={modal}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default AllQuizDetails;
