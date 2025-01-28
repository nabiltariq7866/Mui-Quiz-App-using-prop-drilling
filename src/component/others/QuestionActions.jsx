import EditAdminQuestion from "./EditAdminQuestion";
import Modal from "./Modal";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import PieChartIcon from "@mui/icons-material/PieChart";
const QuestionActions = ({
    data,
    handleEdit,
    handleDelete,
    handleChart,
    activeModal,
    editData,
    setEditData,
    setModal,
    modal,
    setCorrectAnswer,
    correctAnswer,
    adminQuestionCollection,
    setAdminQuestionCollection,
    setaddInput,
  }) => (
    <div className="flex w-[20%] justify-evenly">
      <CreateIcon
        onClick={() => handleEdit(data)}
        sx={{ color: "#757575", cursor: "pointer" }}
      />
      {activeModal === "edit" && (
        <Modal setEditData={setEditData} editData={editData} setModal={setModal} modal={modal}>
          <EditAdminQuestion
            data={editData}
            adminQuestionCollection={adminQuestionCollection}
            setAdminQuestionCollection={setAdminQuestionCollection}
            setModal={setModal}
          />
        </Modal>
      )}
      <DeleteIcon
        onClick={() => handleDelete(data.id)}
        sx={{ color: "#757575", cursor: "pointer" }}
      />
      <PieChartIcon
        onClick={() => handleChart(data)}
        sx={{ color: "#757575", cursor: "pointer" }}
      />
    </div>
  );
  export default QuestionActions;