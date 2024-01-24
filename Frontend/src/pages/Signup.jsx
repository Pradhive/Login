import LoginImg from "../assets/SignUp.png";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [passShow, setPassShow] = useState(false);
  const navigate = useNavigate();

  const data = [
    {
      label: "Firstname",
    },
    {
      label: "Lastname",
    },
    {
      label: "Username",
    },
    {
      label: "Mobile Number",
    },
    {
      label: "Email Address",
    },
  ];

  return (
    <div className=" bg-[#37474F] h-[100vh] w-[100vw]">
      <div className="animate__animated animate__fadeInDownBig absolute  flex justify-end w-full">
        <img src={LoginImg} className="h-[100vh] w-[55vw]" alt="" />
      </div>
      <div className="animate__animated animate__fadeInLeftBig absolute divis  w-[50vw] ">
        <div className="flex flex-col items-center gap-4   justify-center h-screen  ">
          <div className="pt-10 w-4/5">
            <div className="grid grid-cols-2  gap-2">
              {data.map((o,i) => (
                <div key={i}>
                  <div  className="text-[#A4A4A4]   font-medium">{o?.label}</div>
                  <div className="divis h-12 m-2 w-full flex">
                    <div className="pl-10">
                      <input
                        type="text"
                        className="h-12 bg-transparent w-[20vw] border-none focus:border-none focus:outline-none text-[#A4A4A4] "
                        placeholder={o?.label}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-1/2 ">
              <div className="text-[#A4A4A4]  font-medium">Password</div>
              <div className="divis  h-12 m-2 flex">
                <div className="text-[#A4A4A4] p-2">
                  <KeyIcon />
                </div>
                <div className="">
                  <input
                    type={passShow ? "text" : "password"}
                    className="h-12 bg-transparent w-[18vw] border-none focus:border-none focus:outline-none text-[#A4A4A4] "
                    placeholder="Password"
                  />
                </div>
                <div
                  className="text-[#A4A4A4] absolute right-0 pr-4 p-2"
                  onClick={() => setPassShow(!passShow)}
                >
                  {passShow ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>
              </div>
            </div>
          </div>
          <button className="hvr-float-shadow  cursor-pointer text-white  px-24 font-semibold rounded-lg py-4 bg-gradient-to-r from-[#263238] to-[#98DAD9]" onClick={() => navigate("/home")}>
            Sign up
          </button>
          <div className="text-[#A4A4A4] flex gap-4 items-center">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#A4A4A4]"></div>
            <div className="">Or continue with</div>
            <div className="h-1 w-20 bg-gradient-to-r to-transparent from-[#A4A4A4]"></div>
          </div>
          <div className="flex justify-between w-1/3">
            <div className="divis p-4 hvr-float-shadow">
              <img
                src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                alt=""
                className=" h-6 w-6"
              />
            </div>
            <div className="divis p-4 hvr-float-shadow">
              <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
                alt=""
                className=" h-6 w-6"
              />
            </div>
            <div className="divis p-4 hvr-float-shadow">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
                alt=""
                className=" h-6 w-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
