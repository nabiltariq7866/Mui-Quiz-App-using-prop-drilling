import React, { useContext } from "react";
import AppContext from "../../context/AuthContext";
import AllTask from "./AllTask";
import result from "../../assets/result.png";

const FinalResult = () => {
  const context = useContext(AppContext);
  const data = context.userHistoryData?.[context.userHistoryIndex];
  if (!data || !data.questions) {
    return <div className="text-center">No Results Yet</div>;
  }
  return (
    <>
      {data.questions.length !== 0 ? (
        <div className="">
          {/* <h1 className="text-center my-5 text-2xl text-[#1976D2]">
            Final Result
          </h1> */}
          <img src={result} alt="" className="w-[12rem] m-auto shadow-md" />
          <h1 className="text-center text-3xl p-4 rounded-md  inline-block text-green-600">
            Score:{data.scoreCard}
          </h1>
          <div className="flex  flex-wrap w-full   justify-evenly">
            {data?.questions &&
              data?.questions.map((value, index) => (
                <AllTask
                  key={value.id}
                  index={index}
                  data={value}
                  finalResult={true}
                />
              ))}
          </div>
        </div>
      ) : (
        <div className="text-center">No Reuslt Yet</div>
      )}
    </>
  );
};

export default FinalResult;
