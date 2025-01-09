import React, { useState } from "react";
import QuestionOption from "./QuestionOption";
import QuestionOptionTureFalse from "./QuestionOptionTureFalse";
const CreateTask = ({
  setAdminQuestionCollection,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [addInput, setAddInput] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  function handleSelectedAnswer(e) {
    setSelectedAnswer(e.target.value);
  }
  function handleSubmitQuestinAdmin(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(e.target);
    let option = formData.getAll("option");
    let data = Object.fromEntries(formData.entries());
    setCorrectAnswer(option[correctAnswer]);
    let correctAnswertemp;
    {
      data.QuestionType === "boolvalue"
        ? (correctAnswertemp = correctAnswer)
        : (correctAnswertemp = option[correctAnswer]);
    }

    data = {
      ...data,
      id: Date.now(),
      option,
      correctAnswer:correctAnswertemp,
    };
    console.log(data)
    setAdminQuestionCollection((prev) => [...prev, data]);
    setAddInput([]);
    form.reset();
  }
  return (
    <div>
      <div className="p-5 bg-[#43b5a0] m-auto mt-7 w-1/2 rounded">
        <form
          onSubmit={handleSubmitQuestinAdmin}
          className="flex flex-wrap w-full items-start justify-between "
        >
          <div className="w-full">
            <div>
              <h3 className="text-xl font-semibold amibold text-white mb-5">
                Create Question
              </h3>
              <input
                name="Question"
                className="text-2xl py-1 px-2 w-full text-white rounded outline-none bg-transparent  border-[1px] border-white  mb-4 placeholder:text-[#11111131] placeholder:text-base"
                type="text"
                placeholder="Put Question here..."
                required
              />
              <div className="flex justify-between w-1/2 ">
                <label className="text-white">
                  <input
                    className="mr-2"
                    type="radio"
                    value="boolvalue"
                    name="QuestionType"
                    checked={selectedAnswer === "boolvalue"}
                    onChange={handleSelectedAnswer}
                    required
                  />
                  True/false
                </label>
                <label className="text-white">
                  <input
                    className="mr-2"
                    type="radio"
                    value="mcqs"
                    name="QuestionType"
                    checked={selectedAnswer === "mcqs"}
                    onChange={handleSelectedAnswer}
                    required
                  />
                  Mcqs
                </label>
              </div>
            </div>
            {selectedAnswer === "boolvalue" && (
              <QuestionOptionTureFalse setCorrectAnswer={setCorrectAnswer}/>
            )}
            {selectedAnswer === "mcqs" && (
              <QuestionOption
              setAddInput={setAddInput}
                setCorrectAnswer={setCorrectAnswer}
                addInput={addInput}
                correctAnswer={correctAnswer}
              />
            )}
            <button className="bg-white py-3  px-5 mx-auto rounded text-sm mt-4">
              Create Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
