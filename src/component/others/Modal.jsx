import React, { useContext } from "react";
import { createPortal } from "react-dom";
import AppContext from "../../context/AuthContext";

export default function Modal({
  children,
  setSelectedQuiz,
  setselectedQuizdetail,
  setChartData,
}) {
  const context = useContext(AppContext);
  return createPortal(
    <div
      onClick={() => {
        context.setEditAddInput([""]);
        context.setaddInput([""]);
        {
          setSelectedQuiz && setSelectedQuiz(null);
        }
        {
          setselectedQuizdetail && setselectedQuizdetail(null);
        }
        {
          setChartData && setChartData({});
        }

        context.setIsOpen(false);
      }}
      className={`fixed inset-0 z-10 flex items-center justify-center bg-black/40 px-4 ${
        context.isOpen ? "" : "hidden"
      }`}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.getElementById("model")
  );
}
