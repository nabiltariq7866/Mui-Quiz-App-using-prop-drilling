import { useEffect, useState } from "react";

const QuestionOption = ({
  data,
  setCorrectAnswer,
  correctAnswer,
  setAddInput,
  addInput
}) => {
  const [localCorrectAnswer, setLocalCorrectAnswer] = useState(
    data ? data.correctAnswer : null
  );
console.log(data)
  useEffect(() => {
    if (data && data.option) {
      const correctIndex = data.option.indexOf(data.correctAnswer);
      setLocalCorrectAnswer(correctIndex);
    }
  }, [data]);

  function handlePlusButton() {
    setAddInput((prev) => [...prev, ""]);
  }

  function handleDeleteOption(index) {
    const newAddInput = addInput.filter((_, i) => i !== index);
    setAddInput(newAddInput);
    if (index === correctAnswer) {
      setCorrectAnswer(null);
    } else if (index < correctAnswer) {
      setCorrectAnswer((prev) => (prev > 0 ? prev - 1 : 0));
    }
  }

  function handleOptionChange(e, index) {
    const newAddInput = [...addInput];
    newAddInput[index] = e.target.value;
    setAddInput(newAddInput);
  }

  function handleCorrectAnswerChange(index) {
    setLocalCorrectAnswer(index);
    setCorrectAnswer(index);
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

      {addInput.map((item, index) => (
        <div
          className="flex text-white gap-3 mb-2 items-center justify-center"
          key={index}
        >
          <p>{index + 1}</p>
          <input
            type="text"
            value={item || ""}
            name="option"
            onChange={(e) => handleOptionChange(e, index)}
            className="bg-[#43b5a0] placeholder:text-[#11111131] w-3/4 p-2 rounded-md outline-none"
            placeholder="Question option..."
            required
          />
          <label className="flex items-center justify-center gap-2">
            <input
              type="radio"
              name="correctAnswer"
              value={index}
              checked={localCorrectAnswer === index}
              onChange={() => handleCorrectAnswerChange(index)}
              className="ml-2"
              required
            />
            Correct
          </label>
          <button
            type="button"
            className="bg-white text-[#43b5a0] h-[25px] px-1 rounded-sm text-[12px] leading-none"
            onClick={() => handleDeleteOption(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuestionOption;
