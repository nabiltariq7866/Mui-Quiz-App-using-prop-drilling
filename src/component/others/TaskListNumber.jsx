import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex mt-10 gap-5 justify-center  screen">
      <div className="py-6 px-9 w-[45%] rounded-xl bg-[#21888e] ">
        <h2 className="text-3xl font-semibold">10</h2>
        <h3 className="text-xl font-semibold">Computer Quiz </h3>
      </div>
      <div className="py-6 px-9 w-[45%] rounded-xl bg-[#21888e] ">
        <h2 className="text-3xl font-semibold">320</h2>
        <h3 className="text-xl font-semibold">Science Quiz</h3>
      </div>
      <div className="py-6 px-9 w-[45%] rounded-xl bg-[#21888e]">
        <h2 className="text-3xl font-semibold">190</h2>
        <h3 className="text-xl font-semibold">Math Quiz</h3>
      </div>
      <div className="py-6 px-9 w-[45%] rounded-xl bg-[#21888e] ">
        <h2 className="text-3xl font-semibold">340</h2>
        <h3 className="text-xl font-semibold">Islamiyat Quiz</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
