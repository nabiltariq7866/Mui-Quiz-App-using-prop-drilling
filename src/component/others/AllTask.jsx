import QuizIcon from "@mui/icons-material/Quiz";
import Modal from "./Modal";
import EditAdminQuestion from "./EditAdminQuestion";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import PieChartIcon from "@mui/icons-material/PieChart";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
const AllTask = ({
  index,
  data,
  finalResult,
  handleChartItem,
  setActiveModal,
  activeModal,
  setAnswerSelected,
  setSelectedAnswer,
  selectedAnswer,
  setEditData,
  setaddInput,
  setAdminQuestionCollection,
  adminQuestionCollection,
  setCorrectAnswer,
  correctAnswer,
  editData,
  setModal,
  modal,
}) => {
  let userData = JSON.parse(localStorage.getItem("login")) || {};
  function handleEditfun(data) {
    console.log("edit");
    console.log(data);
    setEditData(data);
    setActiveModal("edit");
    setModal(true);
  }
  function handleDelete(id) {
    const newADminQuestion = adminQuestionCollection.filter(
      (data) => data.id !== id
    );
    setAdminQuestionCollection(newADminQuestion);
  }
  const handleAnswerClick = (userAns) => {
    if (userData.role === "user" && !finalResult) {
      const isCorrect = userAns === data.correctAnswer;
      const questionHistory = {
        questionId: data.id,
        question: data.Question,
        option: data.option,
        selectedAnswer: userAns,
        correctAnswer: data.correctAnswer,
        QuestionType: data.QuestionType,
        isCorrect,
      };

      let existingQuizData =
        JSON.parse(localStorage.getItem("TempDatastore")) || [];

      const questionIndex = existingQuizData.findIndex(
        (q) => q.questionId === data.id
      );

      if (questionIndex !== -1) {
        existingQuizData[questionIndex] = questionHistory;
      } else {
        existingQuizData.push(questionHistory);
      }

      localStorage.setItem("TempDatastore", JSON.stringify(existingQuizData));

      setAnswerSelected && setAnswerSelected(true);
      setSelectedAnswer(userAns);
    }
  };

  return (
    <div className=" py-5 rounded flex items-start shrink-0 w-[50%] mt-5">
      <div className=" py-2 mb-3 w-full  px-4 mx-3 flex flex-col justify-between rounded">
        <div className="flex flex-col justify-between ">
          <div className="flex justify-between">
            <p className="text-base font-semibold mb-2">
              Question-{index + 1}:
            </p>
            {userData.role === "admin" && finalResult !== true && (
              <div className="flex w-[20%] justify-evenly">
                <CreateIcon
                  onClick={() => handleEditfun(data)}
                  sx={{ color: "#757575", cursor: "pointer" }}
                />
                {activeModal === "edit" && (
                  <Modal
                    setEditData={setEditData}
                    editData={editData}
                    setModal={setModal}
                    modal={modal}
                  >
                    <EditAdminQuestion
                      data={editData}
                      setCorrectAnswer={setCorrectAnswer}
                      correctAnswer={correctAnswer}
                      adminQuestionCollection={adminQuestionCollection}
                      setAdminQuestionCollection={setAdminQuestionCollection}
                      setEditData={setEditData}
                      setaddInput={setaddInput}
                      setModal={setModal}
                    />
                  </Modal>
                )}
                <DeleteIcon
                  onClick={() => handleDelete(data.id)}
                  sx={{ color: "#757575", cursor: "pointer" }}
                />
                <PieChartIcon
                  sx={{ color: "#757575", cursor: "pointer" }}
                  onClick={() => handleChartItem(data)}
                />
              </div>
            )}
          </div>
          <h2 className="flex gap-2 py-3 px-4 text-xl border-2 flex-shrink-0 border-[#757575] rounded-full ` mb-2">
            <QuizIcon sx={{ color: "#0A090B" }} />
            <p className="text-[#0A090B] font-medium">
              {data.Question || data.question}
            </p>
          </h2>
        </div>
        <div className="flex flex-col flex-wrap justify-between items-start">
          {data.option.map((value, indexo) => {
            let backgroundColor = "";
            if (
              finalResult &&
              (userData.role === "user" || userData.role === "admin")
            ) {
              if (value === data.selectedAnswer) {
                backgroundColor =
                  value === data.correctAnswer ? "bg-green-500" : "bg-red-500";
              }
              if (
                value === data.correctAnswer &&
                value !== data.selectedAnswer
              ) {
                backgroundColor = "bg-green-500";
              }
            }
            return (
              <div className="flex items-center w-full gap-1">
                <div
                  className={`  ${backgroundColor}
            } flex gap-4 items-center rounded-full mb-2 border border-[#F1F1F0] w-full p-2`}
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
                  <label
                    className={`${
                      userData.role === "admin" && finalResult !== true
                        ? "border-2 border-gray-500 w-[90%] mb-2 p-2 rounded-full"
                        : `shrink-0    cursor-pointer mr-4  flex gap-3 mb-2 `
                    } `}
                  >
                    <input
                      type="radio"
                      name={`selectedAns+${index}`}
                      checked={selectedAnswer === value}
                      onClick={() => handleAnswerClick(value)}
                    />
                    correct
                  </label>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
