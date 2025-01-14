
const QuestionOptionTureFalse = ({setOptions}) => {
  function handleCorrectAnswerChange(e) {
    setOptions({ option:["true","false"], isCorrect:e.target.value  });
  }
  return (
    <div className="bg-[#328a7a] w-1/2 p-2 rounded-md  flex flex-col mt-3 gap-3">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold text-white bggre">Option</h1>
        <h1 className="text-xl text-white font-semibold bggre">Select</h1>
      </div>
      <div className="flex justify-between">
        <div>
          <div>
            <label className="text-white">
              <input
                className="mr-2"
                type="checkbox"
                value="true"
                name="option"
                checked
              />
              True
            </label>
          </div>
          <div>
            <label className="text-white">
              <input
                className="mr-2"
                type="checkbox"
                value="false"
                name="option"
                checked
              />
              False
            </label>
          </div>
        </div>
        <div>
          <div>
            <label className="text-white">
              <input
                className="mr-2"
                type="radio"
                value="true"
                name="correctAnswer"
                onChange={handleCorrectAnswerChange}
                readOnly
                required
              />
              correct
            </label>
          </div>
          <div>
            <label className="text-white">
              <input
                className="mr-2"
                type="radio"
                value="false"
                name="correctAnswer"
                onChange={handleCorrectAnswerChange}
                required
              />
              Correct
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionOptionTureFalse;
