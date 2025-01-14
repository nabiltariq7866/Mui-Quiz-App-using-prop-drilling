import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
const QuestionOption = ({ data, setOptions, options }) => {
  // console.log(data);
  useEffect(() => {
    if (data && data.option) {
      const correctIndex = data.option.indexOf(data.correctAnswer);
      setLocalCorrectAnswer(correctIndex);
    }
  }, [data]);

  function handlePlusButton() {
    setOptions((prev) => [...prev, {id:Date.now(), option: "", isCorrect: false }]);
  }

  function handleDeleteOption(id) {
    const newOptions = options.filter((item) => item.id !== id);
    setOptions(newOptions);
  }

  function handleOptionChange(e,id) {
    const updatedOption = e.target.value;
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, option: updatedOption } : option
      )
    );
  }

  function handleCorrectAnswerChange(id) {
    setOptions((prevOptions) =>
      prevOptions.map((option) => ({
        ...option,
        isCorrect: option.id === id,
      }))
    );
  }

  return (
    <div className="bg-[#328a7a] rounded-md w-2/3 m-auto mt-3 p-4">
      <div className="flex items-center justify-end mb-2">
        <button
          type="button"
          onClick={handlePlusButton}
          className="bg-white text-[#43b5a0] w-[30px] flex items-center justify-center h-[30px] text-lg font-medium rounded-[50%]"
        >
          +
        </button>
      </div>

      {options.map((item, index) => (
        <div
          className="flex text-white gap-3 mb-2 items-center justify-center"
          key={index}
        >
          <p>{index + 1}</p>
          <input
            type="text"
            value={item.option || ""}
            name="option"
            onChange={(e) => handleOptionChange(e, item.id)}
            className="bg-[#43b5a0] placeholder:text-[#11111131] w-3/4 p-2 rounded-md outline-none"
            placeholder="Question option..."
            required
          />
          <label className="flex items-center justify-center gap-2">
            <Checkbox
              checked={item.isCorrect}
              onChange={() => handleCorrectAnswerChange(item.id)}
              color="pink"
            />
            Correct
          </label>
          <button
            type="button"
            className="bg-white text-[#43b5a0] h-[25px] px-1 rounded-sm text-[12px] leading-none"
            onClick={() => handleDeleteOption(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuestionOption;
