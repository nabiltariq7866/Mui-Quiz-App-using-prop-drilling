import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
const OptionList = ({
    options,
    finalResult,
    userData,
    data,
    selectedAnswer,
    handleAnswerClick,
  }) => (
    <div className="flex flex-col flex-wrap justify-between items-start">
      {options.map((value, indexo) => {
        let backgroundColor = "";
        if (
          finalResult &&
          (userData.role === "user" || userData.role === "admin")
        ) {
          if (value === data.selectedAnswer) {
            backgroundColor =
              value === data.correctAnswer ? "bg-green-500" : "bg-red-500";
          }
          if (value === data.correctAnswer && value !== data.selectedAnswer) {
            backgroundColor = "bg-green-500";
          }
        }
  
        return (
          <div className="flex items-center w-full gap-1" key={indexo}>
            <div
              className={`${backgroundColor} flex gap-4 items-center rounded-full mb-2 border border-[#F1F1F0] w-full p-2`}
            >
              <p
                className={`w-9 h-9 border-2 flex items-center justify-center border-gray-500 rounded-full`}
              >
                {backgroundColor === "bg-green-500" && <CheckIcon />}
                {backgroundColor === "bg-red-500" && <CloseIcon />}
                {backgroundColor === "" && indexo + 1}
              </p>
              <p className="text-[#0A090B] font-medium">{value}</p>
            </div>
            {!finalResult && userData.role !== "admin" && (
              <label className="shrink-0 cursor-pointer mr-4 flex gap-3 mb-2">
                <input
                  type="radio"
                  name={`selectedAns+${data.id}`}
                  checked={selectedAnswer === value}
                  onClick={() => handleAnswerClick(value)}
                />
                Correct
              </label>
            )}
          </div>
        );
      })}
    </div>
  );
  export default OptionList