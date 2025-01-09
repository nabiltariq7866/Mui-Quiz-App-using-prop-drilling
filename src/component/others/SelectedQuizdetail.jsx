import React from "react";
import AllTask from "./AllTask";

const SelectedQuizdetail = ({ selectedQuiz }) => {
  console.log(selectedQuiz)
  return (
    <div  className="bg-white ml-[-8px] w-[1423px] h-[90vh] mt-[4.5rem] rounded-3xl box-border px-1 overflow-hidden">
    <div className="w-full  h-[90vh] pr-2 overflow-y-auto box-border px-2 scroll-style">
    <h1 className="text-[30px] font-semibold text-[#43b5a0] underline   ">
      Score:{selectedQuiz.scoreCard}
    </h1>
    <div className="flex justify-between flex-wrap">
      {selectedQuiz.questions.map((quiz, index) => (
        <AllTask
          key={quiz.questionId}
          index={index}
          data={quiz}
          finalResult={true}
        />
      ))}
    </div>
  </div>
  </div>
  );
};

export default SelectedQuizdetail;
