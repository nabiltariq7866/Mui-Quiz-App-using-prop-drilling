import quizbg from "../../assets/balo.png";
import line from "../../assets/line.png";
import { Button } from "@mui/material";
const Home = ({userData}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-1/2 flex flex-col ">
          <img src={quizbg} alt="" className="w-[100%]" />
        </div>
        <div className="w-1/2 mt-[-4rem] flex flex-col ">
          <h2 className="text-[#555555] font-sans text-7xl font-extrabold">
            Top
          </h2>
          <div className="mt-[-1rem]">
            <h1 className="text-[#43b5a0] text-[7.5rem] font-black">
              Quiz App
            </h1>
            <img src={line} alt="" className="w-[85%] mt-[-1rem]" />
          </div>
          <h2 className="text-[#555555] font-sans text-3xl font-semibold  mt-4">
            Test Your Knowledge
          </h2>
          <h2 className="text-[#555555] font-sans text-3xl font-semibold  mt-2">
            Challenge Your Mind
          </h2>

          {userData.role === "user" ? (
            <Button
              sx={{
                background: "#43b5a0",
                color: "white",
                fontSize: "1.25rem",
                marginTop: "1rem",
                borderRadius: "9999px",
              }}
              className=" w-[150px] py-2"
            >
              Take Quiz
            </Button>
          ) : (
            <Button
              sx={{
                background: "#43b5a0",
                color: "white",
                fontSize: "1.25rem",
                marginTop: "1rem",
                borderRadius: "9999px",
              }}
              className=" w-[250px] py-2"
            >
              Learn More...
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
