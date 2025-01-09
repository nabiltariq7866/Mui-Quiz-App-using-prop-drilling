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
  const [chartData, setChartData] = useState({});
  const [activeModal, setActiveModal] = useState(null);
  const [modal, setModal] = useState(false);
  function handleChartItem(data) {
    setChartData(data);
    setActiveModal("chart");
    setModal(true);
  }

  return (
    <>
      <div className="flex  flex-wrap w-full   justify-evenly">
        {adminQuestionCollection.length > 0 || userData.role === "admin" ? (
          adminQuestionCollection.map((value, index) => (
            <AllTask
              key={value.id}
              index={index}
              data={value}
              handleChartItem={handleChartItem}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
              setEditData={setEditData}
              setAdminQuestionCollection={setAdminQuestionCollection}
              userData={userData}
              adminQuestionCollection={adminQuestionCollection}
              setModal={setModal}
              editData={editData}
              modal={modal}
            />
          ))
        ) : (
          <h1 className="text-[8rem] mt-16 text-green-600">No Question Yet</h1>
        )}
      </div>
      {activeModal === "chart" && (
        <Modal
          // setEditAddInput={setEditAddInput}
          // setaddInput={setaddInput}
          setModal={setModal}
          modal={modal}
        >
          <ChartBar data={chartData} quizData={quizData} />
        </Modal>
      )}
    </>
  );
};

export default AllQuestionAdmin;
