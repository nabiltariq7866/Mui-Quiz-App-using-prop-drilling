import { useNavigate, replace } from "react-router-dom";
import wellcome1 from "../../assets/welcome1.png";
import login from "../../assets/login.png";
import { MdAttachEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import logo from "../../assets/QuizLogo.png";
const Login = ({setUserData,setUserHistoryData}) => {
  const navigate = useNavigate();
  function hanldeSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    let loginData;
    if (data.email === "nabiltariq7866@gmail.com") {
      loginData = {
        ...data,
        role: "admin",
        login: true,
      };
      setUserData(loginData);
      navigate("/Layout", replace);
    } else {
      loginData = {
        ...data,
        role: "user",
        login: true,
      };
    

      setUserData(loginData);
      navigate("/Layout", replace);
    }
  }
  return (
    <div className="py-16 flex items-center justify-center  px-[15rem] min-h-screen bg-[#43b5a0] w-full">
    <div className="shadow-lg w-[60rem] flex items-center h-[35rem] bg-white p-20 rounded-lg">
      <div className="w-1/2 h-full">
        <img src={login} alt="" />
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-center mt-[-5rem]">
        <div className="w-[12rem] flex flex-col items-start justify-center">
          <img src={wellcome1} alt="" className="w-[8rem] m-auto"/>
          {/* <h2 className="text-[#43b5a0] m-auto text-3xl font-semibold" >Login to</h2> */}
          <img src={logo} alt="" className="w-full m-auto" />
        </div>
        <form
          onSubmit={hanldeSubmit}
          className="flex flex-col gap-2 justify-center items-center"
        >
          <div className="border-[#43b5a0] border-2 rounded-full overflow-hidden flex w-full it items-center">
            <p className="py-3 pl-5 pr-3">
              <MdAttachEmail style={{ color: "#6D7073" }} />
            </p>
            <input
              className="placeholder:text-gray-400 w-full  text-sm   outline-none  bg-transparent py-3 px-5"
              type="email"
              placeholder="Enter your Email"
              required
              name="email"
            />
          </div>
          <div className="border-[#43b5a0] overflow-hidden border-2 rounded-full flex w-full it items-center">
            <p className="py-3 pl-5 pr-3">
              <TbLockPassword style={{ color: "#6D7073" }} />
            </p>
            <input
              className="placeholder:text-gray-400   text-sm w-full  outline-none  bg-transparent    py-3 px-5"
              type="password"
              placeholder="Enter your Password"
              required
              name="password"
            />
          </div>
          <button className="placeholder:text-white text-xl outline-none  bg-[#43b5a0] text-white rounded-full py-3 px-5 w-[180px]">
            Log in
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
