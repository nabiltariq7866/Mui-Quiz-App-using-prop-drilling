import SelectedQuizdetail from "./SelectedQuizdetail";
import Modal from "./Modal";
import { useState } from "react";

const QuizDetails = ({ selectedQuiz, setSelectedQuiz }) => {
  const [selectedQuizDetail, setSelectedQuizDetail] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSetResult = (quizDetails) => {
    setSelectedQuizDetail(quizDetails);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedQuizDetail(null);
  };

  return (
    <div className="mt-4 bg-[#43b5a0] w-full overflow-y-auto h-[80vh] z-10 p-4 rounded-md scroll-style">
      <h2 className="text-xl font-bold bg-white text-[#43b5a0] p-4 rounded-md mb-3">
        Quiz Details for {selectedQuiz.email}
      </h2>
      <ul>
        {selectedQuiz.quizzes.map((quiz, index) => (
          <li key={`${selectedQuiz.email}-${index}`} className="mb-4">
            <p className="my-2 text-white">
              <strong className="text-xl font-bold mr-2 bg-[#43b5a0] text-white p-1 rounded-md">
                Quiz Time:
              </strong>
              {quiz.quizTime}
            </p>
            <p className="text-white">Score: {quiz.scoreCard}</p>
            <button
              type="button"
              className="bg-[#33a791] my-1 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-[#2d8e75] transition"
              onClick={() => handleSetResult(quiz)}
              aria-label={`See result for quiz taken on ${quiz.quizTime}`}
            >
              See result
            </button>
          </li>
        ))}
      </ul>

      {modalOpen && selectedQuizDetail && (
        <Modal setModal={setModalOpen} modal={modalOpen}>
          <SelectedQuizdetail selectedQuiz={selectedQuizDetail} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default QuizDetails;
