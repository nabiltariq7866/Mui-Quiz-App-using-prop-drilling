import DeleteQuestion from "./DeleteQuestion";
import ShowOptionSelectChart from "./ShowOptionSelectChart";
import EditIcon from "./EditIcon";
const QuestionActions = ({
  data,
  adminQuestionCollection,
  setAdminQuestionCollection,
  quizData,
}) => {
  console.log(adminQuestionCollection)
  return (
    <div className="flex w-[20%] justify-evenly">
      <EditIcon
        data={data}
        setAdminQuestionCollection={setAdminQuestionCollection}
        adminQuestionCollection={adminQuestionCollection}
      />

      <DeleteQuestion
        data={data}
        setAdminQuestionCollection={setAdminQuestionCollection}
        adminQuestionCollection={adminQuestionCollection}
      />
      <ShowOptionSelectChart data={data} quizData={quizData} />
    </div>
  );
};
export default QuestionActions;
