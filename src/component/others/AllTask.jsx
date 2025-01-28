import OptionList from "./OptionList";
import QuestionActions from "./QuestionActions";
import QuestionHeader from "./QuestionHeader";
import QuizIcon from "@mui/icons-material/Quiz";
const AllTask = ({
  index,
  data,
  finalResult,
  quizData,
  setAnswerSelected,
  setSelectedAnswer,
  selectedAnswer,
  setAdminQuestionCollection,
  adminQuestionCollection,
}) => {
  const userData = JSON.parse(localStorage.getItem("login")) || {};
console.log(adminQuestionCollection)
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

      const existingQuizData =
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
    <div className="py-5 rounded flex items-start shrink-0 w-[50%] mt-5">
      <div className="py-2 mb-3 w-full px-4 mx-3 flex flex-col justify-between rounded">
        <div className="flex flex-col justify-between">
          <QuestionHeader
            index={index}
            question={
              <QuestionActions
                data={data}
                adminQuestionCollection={adminQuestionCollection}
                setAdminQuestionCollection={setAdminQuestionCollection}
                quizData={quizData}
              />
            }
          />
          <h2 className="flex gap-2 py-3 px-4 text-xl border-2 flex-shrink-0 border-[#757575] rounded-full mb-2">
            <QuizIcon sx={{ color: "#0A090B" }} />
            <p className="text-[#0A090B] font-medium">
              {data.Question || data.question}
            </p>
          </h2>
        </div>
        <OptionList
          options={data.option}
          finalResult={finalResult}
          userData={userData}
          data={data}
          selectedAnswer={selectedAnswer}
          handleAnswerClick={handleAnswerClick}
        />
      </div>
    </div>
  );
};

export default AllTask;
