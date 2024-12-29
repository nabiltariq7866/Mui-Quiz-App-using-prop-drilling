import React from "react";
import manlogo from "../../assets/manlogo.png";
const Home1 = () => {
  return (
    <div className="w-[90%] context-behind p-4 rounded-md flex flex-col justify-between m-auto h-full ">
      <div className="w-full h-full flex items-center justify-between">
        <div className="w-1/2 mt-[-4rem]">
          <h1 className="text-[#111] mb-5 text-2xl font-bold " style={{ fontFamily: 'Roboto, sans-serif' }}>
            "Quiz App: Test Your Knowledge, Challenge Your Mind!"
          </h1>
          <p className="text-[#111]  text-lg" >
            Welcome to Quiz App, the ultimate quiz app designed to make learning
            fun, engaging, and interactive. With a sleek design, customizable
            quizzes, and real-time leaderboards, this app transforms learning
            into an exciting adventure. <br /> Dive into a world of endless
            questions, unlock achievements, and track your progress as you level
            up your skills. Perfect for students, professionals, or anyone who
            loves a good challenge—Quiz App is your go-to destination for
            brain-teasing fun!
          </p>
        </div>
        <div className="w-1/2 flex flex-col ">
          <img src={manlogo} alt="" className="w-[90%]" />
        </div>
      </div>
    </div>
  );
};

export default Home1;
