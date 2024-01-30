import LoginImg from "../assets/Login.png";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";


function Login() {
  const [passShow, setPassShow] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState([
    {
      username: "",
      password: "",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", formData)
      .then((res) => {
        if (res.data.message === "Successfully Logged in") {
          toast.success(res.data.message);
          Cookies.set("jwtToken", res.data.token, { expires: 1 });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          toast.error(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" bg-[#37474F] h-screen w-screen">
      <div className="animate__animated animate__fadeInDownBig absolute  flex justify-end w-full">
        <img src={LoginImg} className="h-[100vh] w-[55vw]" alt="" />
      </div>
      <div className="animate__animated animate__fadeInLeftBig absolute divis  w-[50vw] ">
        <div className="flex flex-col items-center gap-4  justify-center h-screen  ">
          <div className="text-5xl font-bold text-white">Welcome</div>
          <div className="text-xl tracking-wide font-bold text-[#A4A4A4]">
            Glad To Have you
          </div>
          <div className="pt-10 w-1/2">
            <div className="text-[#A4A4A4]  font-medium">UserName</div>
            <div className="divis h-12 m-2 flex">
              <div className="text-[#A4A4A4] p-2">
                <PersonIcon />
              </div>
              <div className="">
                <input
                  type="text"
                  value={formData["username"]}
                  name="username"
                  autoComplete="off"
                  onChange={handleChange}
                  className="h-12 bg-transparent w-[20vw] border-none focus:border-none focus:outline-none text-[#A4A4A4] "
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="text-[#A4A4A4]  font-medium">Password</div>
            <div className="divis h-12 m-2 flex">
              <div className="text-[#A4A4A4] p-2">
                <KeyIcon />
              </div>
              <div className="">
                <input
                  type={passShow ? "text" : "password"}
                  value={formData["password"]}
                  name="password"
                  autoComplete="off"
                  onChange={handleChange}
                  className="h-12 bg-transparent w-[18vw] border-none focus:border-none focus:outline-none text-[#A4A4A4] "
                  placeholder="Password"
                />
              </div>
              <div
                className="text-[#A4A4A4] p-2"
                onClick={() => setPassShow(!passShow)}
              >
                {passShow ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <div className="flex justify-end text-[#A4A4A4] p-2 hover:underline cursor-pointer">
              Forgot Password ?
            </div>
          </div>
          <button
            className="hvr-float-shadow  cursor-pointer text-white mt-4 px-24 font-semibold rounded-lg py-4 bg-gradient-to-r from-[#263238] to-[#98DAD9]"
            onClick={handleSubmit}
          >
            Sign In
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
          <div className="text-[#A4A4A4] flex gap-2">
            Don&apos;t have an account ?
            <div
              className="hover:underline text-white"
              onClick={() => navigate("/signup")}
            >
              SignUp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
