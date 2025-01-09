import AllTask from "./AllTask";

const FinalResult = () => {
  const localTodos = localStorage.getItem("quizData");
let login = JSON.parse(localStorage.getItem("login")) || {}; 
let data
if (login.email) {
 
  data = JSON.parse(localTodos) || []; 
  console.log(data)
  data = data.find(item => item.email === login.email);  
  if (data && data.quizzes && data.quizzes.length > 0) {
    data = data.quizzes[data.quizzes.length-1];  
    console.log(data);
  }
}

  if (!data || !data.questions) {
    return <div className="text-center">No Results Yet</div>;
  }
  return (
    <>
      {data.questions.length !== 0 ? (
        <div className="">
          <h1 className="text-center my-5 text-2xl text-[#43b5a0] font-sans font-semibold">
            Final Result
          </h1>
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
        <div className="text-center my-5 text-2xl text-[#43b5a0] font-sans font-semibold">
          No Reuslt Yet
        </div>
      )}
    </>
  );
};

export default FinalResult;
