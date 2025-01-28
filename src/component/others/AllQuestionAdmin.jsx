import React, { useEffect, useState } from "react";
import AllTask from "./AllTask";
import { useNavigate, replace } from "react-router-dom";
import Modal from "./Modal";
import ChartBar from "./ChartBar";
const AllQuestionAdmin = ({
  adminQuestionCollection,
  userData,
  setAdminQuestionCollection,
  quizData,
}) => {
  const [editData, setEditData] = useState(null);
  console.log(editData);
  const [activeModal, setActiveModal] = useState(null);
 

  return (
    <>
      <div className="flex  flex-wrap w-full   justify-evenly">
        {adminQuestionCollection.length > 0 || userData.role === "admin" ? (
          adminQuestionCollection.map((value, index) => (
            <AllTask
              key={value.id}
              index={index}
              data={value}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
              setEditData={setEditData}
              setAdminQuestionCollection={setAdminQuestionCollection}
              userData={userData}
              adminQuestionCollection={adminQuestionCollection}
              editData={editData}
              quizData={quizData}
            />
          ))
        ) : (
          <h1 className="text-[8rem] mt-16 text-green-600">No Question Yet</h1>
        )}
      </div>
     
    </>
  );
};

export default AllQuestionAdmin;
