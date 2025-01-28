import { useEffect, useState } from "react";
import QuestionOption from "./QuestionOption";
import QuestionOptionTureFalse from "./QuestionOptionTureFalse";

const EditAdminQuestion = ({ adminQuestionCollection,setAdminQuestionCollection,setModal, data }) => {
  console.log(adminQuestionCollection)
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions([]);
    if (data && data.option) {
      const formattedOptions = data.option.map((item) => ({
        id: Date.now() + Math.random(),
        option: item,
        isCorrect: item === data.correctAnswer,
      }));
      setOptions(formattedOptions); 
    }
    setQuestion(data.Question);
  }, [data]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  function handleSubmitQuestionAdmin(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    let option = formData.getAll("option");

    let editData = Object.fromEntries(formData.entries());

    let correctAnswertemp;
    if (data.QuestionType === "TFQuestion") {
      correctAnswertemp = editData.correctAnswer;
    } else {
      options.map((item) => {
        if (item.isCorrect) {
          correctAnswertemp = item.option;
        }
      });
    }
    editData = {
      ...data,
      ...editData,
      correctAnswer: correctAnswertemp,
      option: option,
    };
    console.log(editData);
    const updatedQuestions = adminQuestionCollection.map((dataPass) => {
      if (editData.id === dataPass.id) {
        return editData;
      }
      return dataPass;
    });

    setAdminQuestionCollection(updatedQuestions);
    setOptions([]);
    setQuestion("")
    localStorage.setItem("modalOpen", JSON.stringify(false));
    setModal(false);
    form.reset();
  }

  return (
    <div>
      <div className="p-5 bg-white m-auto mt-7 w-full rounded">
        <form
          onSubmit={handleSubmitQuestionAdmin}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className="w-full">
            <div>
              <h3 className="text-xl font-semibold amibold text-gray-300 mb-5">
                Update Question
              </h3>
              <input
                name="Question"
                className="text-2xl py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-t-gray-400 border-gray-400 mb-4"
                value={question} // Two-way binding
                onChange={handleQuestionChange} // Update state on input change
                type="text"
                placeholder="Update Question .."
                required
              />
            </div>

            {data?.QuestionType === "TFQuestion" && <QuestionOptionTureFalse />}
            {data?.QuestionType === "MCQSQuestions" && (
              <QuestionOption
                setOptions={setOptions}
                options={options}
                data={data}
                isEdit={true}
              />
            )}

            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Update Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditAdminQuestion;