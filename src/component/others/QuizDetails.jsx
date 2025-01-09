import SelectedQuizdetail from "./SelectedQuizdetail";
import Modal from "./Modal";
import { useEffect, useState } from "react";

const QuizDetails = ({
  selectedQuiz,
  setSelectedQuiz,
  setModal,
  modal
}) => {
  const [selectedQuizdetail, setselectedQuizdetail] = useState(null);
  console.log()
  useEffect(() => {
    setselectedQuizdetail(null);
  }, [selectedQuiz]);
  function handleSetReault(quizDetails) {
    console.log(quizDetails)
    setselectedQuizdetail(quizDetails);
    setModal(true);
  }
  return (
    <div className="mt-4 bg-[#43b5a0] w-[140%] overflow-y-auto h-[80vh] z-10 p-4 rounded-md scroll-style">
      <h2 className="text-xl font-bold bg-white text-[#43b5a0] p-4 rounded-md mb-3">
        Quiz Details for {selectedQuiz.email}
      </h2>
      <ul>
        {selectedQuiz.quizzes.map((quiz, index) => {
          return (
            <ul key={index}>
              <p className="my-2 text-white">
                <strong className="text-xl font-bold mr-2 bg-[#43b5a0] text-white p-1 rounded-md">
                  Quiz Time:
                </strong>
                {quiz.quizTime}
              </p>
              <p className=" text-white">Score : {quiz.scoreCard}</p>
              <button
                type="button"
                className="bg-[#33a791] my-1 text-white px-3 py-2 rounded-md text-[12px] font-semibold"
                onClick={() => handleSetReault(quiz)}
              >
                See result
              </button>
              {selectedQuizdetail && (
                <Modal
                  setSelectedQuiz={setSelectedQuiz}
                  setselectedQuizdetail={setselectedQuizdetail}
                  setModal={setModal}
                  modal={modal}
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
