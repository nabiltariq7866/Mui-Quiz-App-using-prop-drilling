import React, { useState } from "react";
import QuestionOption from "./QuestionOption";
import QuestionOptionTureFalse from "./QuestionOptionTureFalse";
const CreateTask = ({ setAdminQuestionCollection }) => {
  const [questionType, setQuestionType] = useState({
    MCQSQuestions: false,
    TFQuestion: false, 
  });
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([{ option: "", isCorrect: false }]);
  function handleQuestionType(e) {
    const key = e.target.value;
    console.log(key);
    setQuestionType({
      MCQSQuestions: key === "MCQSQuestions",
      TFQuestion: key === "TFQuestion", 
    });
  }
  function handleSubmitQuestinAdmin(e) {
    e.preventDefault();
    let qusType = questionType.MCQSQuestions ? "MCQSQuestions" : "TFQuestion";
    let correctAnswer;
    const optionData = options.map(option =>{ 
      if(option.isCorrect){
        option
        correctAnswer=option.option;
      }
    return  option.option
    });
    const data = {
      id: Date.now(),
      Question: question,
      options: optionData, 
      correctAnswer: correctAnswer, 
      QuestionType: qusType,
    };
    console.log(data);
    setAdminQuestionCollection((prev) => [...prev, data]);
    setQuestionType({
      MCQSQuestions: false,
      TFQuestion: false,
    });
    setOptions([{ option: "", isCorrect: false }]);
    setQuestion("");
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
                value={question} // Two-way binding
                onChange={(e) => setQuestion(e.target.value)} // Handle change
                placeholder="Put Question here..."
                required
              />
              <div className="flex justify-between w-1/2 ">
                <label className="text-white">
                  <input
                    className="mr-2"
                    type="radio"
                    value="TFQuestion"
                    name="QuestionType"
                    checked={questionType.TFQuestion === true}
                    onChange={handleQuestionType}
                    required
                  />
                  True/false
                </label>
                <label className="text-white">
                  <input
                    className="mr-2"
                    type="radio"
                    value="MCQSQuestions"
                    name="QuestionType"
                    checked={questionType.MCQSQuestions === true}
                    onChange={handleQuestionType}
                    required
                  />
                  Mcqs
                </label>
              </div>
            </div>
            {questionType.TFQuestion && (
              <QuestionOptionTureFalse setOptions={setOptions} />
            )}
            {questionType.MCQSQuestions && (
              <QuestionOption setOptions={setOptions} options={options} />
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
