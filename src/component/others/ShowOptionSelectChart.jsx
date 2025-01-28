import React, { useState } from "react";
import Modal from "./Modal";
import ChartBar from "./ChartBar";

import PieChartIcon from "@mui/icons-material/PieChart";
const ShowOptionSelectChart = ({ data,quizData }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && (
        <Modal setModal={setModal} modal={modal}>
          <ChartBar data={data} quizData={quizData} />
        </Modal>
      )}

      <PieChartIcon
        onClick={() =>setModal(true) }
        sx={{ color: "#757575", cursor: "pointer" }}
      />
    </>
  );
};

export default ShowOptionSelectChart;
