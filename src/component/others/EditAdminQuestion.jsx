import { useEffect, useState } from "react";
import QuestionOption from "./QuestionOption";
import QuestionOptionTureFalse from "./QuestionOptionTureFalse";

const EditAdminQuestion = ({
  adminQuestionCollection,
  setAdminQuestionCollection,
  setModal,
  data,
}) => {
  console.log("edit modal");
  console.log(data);
  const [editAddInput, setEditAddInput] = useState(data?.Question || []); // For Question
  console.log(editAddInput)
  const [changeAns, setChangeAns] = useState();
  const [addInput, setAddInput] = useState(data?.option || []); // For Options
  console.log(addInput)
  useEffect(() => {
    if (data && data.option) {
      setEditAddInput(data?.Question )
      setAddInput(data?.option)
    }
  }, [data]);

  // Handle input changes for question
  const handleQuestionChange = (e) => {
    setEditAddInput(e.target.value);
  };

  // Handle changes for options (used for MCQs)
  const handleOptionChange = (index, e) => {
    const updatedOptions = [...addInput];
    updatedOptions[index] = e.target.value;
    setAddInput(updatedOptions);
  };

  function handleSubmitQuestionAdmin(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    let option = formData.getAll("option");

    let editData = Object.fromEntries(formData.entries());

    let correctAnswertemp;
    if (data.QuestionType === "boolvalue") {
      correctAnswertemp = editData.correctAnswer;
    } else {
      correctAnswertemp = option[editData.correctAnswer];
    }
    editData = {
      ...data,
      ...editData,
      correctAnswer: correctAnswertemp,
      option: option,
    };

    const updatedQuestions = adminQuestionCollection.map((dataPass) => {
      if (editData.id === dataPass.id) {
        return editData;
      }
      return dataPass;
    });

    setAdminQuestionCollection(updatedQuestions);
    // Optionally update the localStorage here
    // Clear form inputs and reset modal
    // setEditAddInput("");
    setEditAddInput("");
    setAddInput([]);
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
                value={editAddInput} // Two-way binding
                onChange={handleQuestionChange} // Update state on input change
                type="text"
                placeholder="Update Question .."
                required
              />
              {console.log(editAddInput)}
            </div>

            {data?.QuestionType === "TFQuestion" && <QuestionOptionTureFalse />}
            {data?.QuestionType === "MCQSQuestions" && (
              <QuestionOption
                data={data}
                edit={true}
                setChangeAns={setChangeAns}
                addInput={addInput}
                setAddInput={setAddInput}
                handleOptionChange={handleOptionChange} // Pass the handler
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

// import { useEffect, useState } from "react";
// import QuestionOption from "./QuestionOption";
// import QuestionOptionTureFalse from "./QuestionOptionTureFalse";

// const EditAdminQuestion = ({
//   setCorrectAnswer,
//   correctAnswer,
//   adminQuestionCollection,
//   setAdminQuestionCollection,
//   setIsOpen,
// }) => {
//   console.log("edit modal");
//   let data = JSON.parse(localStorage.getItem("editQuestion")) || [];
//   const [editAddInput, setEditAddInput] = useState(data.Question || [""]);
//   const [changeAns, setChangeAns] = useState();
//   const [addInput, setaddInput] = useState(data.option || [""]);
//   console.log(data.Question);
//   console.log(editAddInput);
//   console.log(addInput);

//   useEffect(() => {
//     if (data && data.option) {
//       setCorrectAnswer(data.option.indexOf(data.correctAnswer));
//     }
//   }, [data]);

//   function handleSubmitQuestinAdmin(e) {
//     e.preventDefault();

//     const form = e.target;
//     const formData = new FormData(form);
//     let option = formData.getAll("option");

//     let editData = Object.fromEntries(formData.entries());

//     let correctAnswertemp;
//     if (data.QuestionType === "boolvalue") {
//       correctAnswertemp = correctAnswer;
//     } else {
//       correctAnswertemp = option[changeAns];
//     }

//     editData = {
//       ...data,
//       ...editData,
//       correctAnswer,
//       option,
//     };

//     const updatedQuestions = adminQuestionCollection.map((dataPass) => {
//       if (editData.id === dataPass.id) {
//         return editData;
//       }
//       return dataPass;
//     });
//     setAdminQuestionCollection(updatedQuestions);

//     setEditAddInput([""]);
//     setaddInput([""]);
//     setIsOpen(false);
//     form.reset();
//   }

//   return (
//     <div>
//       <div className="p-5 bg-white m-auto mt-7 w-full rounded">
//         <form
//           onSubmit={handleSubmitQuestinAdmin}
//           className="flex flex-wrap w-full items-start justify-between"
//         >
//           <div className="w-full">
//             <div>
//               <h3 className="text-xl font-semibold amibold text-gray-300 mb-5">
//                 Update Question
//               </h3>
//               <input
//                 name="Question"
//                 className="text-2xl py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-t-gray-400 border-gray-400 mb-4"
//                 value={editAddInput}
//                 type="text"

//                 placeholder="Update Question .."
//                 required
//               />
//             </div>

//             {data.QuestionType === "boolvalue" && <QuestionOptionTureFalse />}
//             {data.QuestionType === "mcqs" && (
//               <QuestionOption
//                 data={data}
//                 edit={true}
//                 setChangeAns={setChangeAns}
//                 setaddInput={setaddInput}
//                 addInput={addInput}
//               />
//             )}

//             <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
//               Update Question
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default EditAdminQuestion;
