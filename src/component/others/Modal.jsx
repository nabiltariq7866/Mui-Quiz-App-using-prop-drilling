import { createPortal } from "react-dom";

export default function Modal({
  children,
  setSelectedQuiz,
  setselectedQuizdetail,
  setChartData,
  setModal,
  modal,
}) {
  return createPortal(
    <div
      onClick={() => {
        {
          setSelectedQuiz && setSelectedQuiz(null);
        }
        localStorage.removeItem("editQuestion");
        {
          setselectedQuizdetail && setselectedQuizdetail(null);
        }
        {
          setChartData && setChartData({});
        }
        setModal(false)
      }}
      className={`fixed inset-0 z-10 flex items-center justify-center bg-black/40 px-4 ${
        modal ? "" : "hidden"
      }`}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.getElementById("model")
  );
}
