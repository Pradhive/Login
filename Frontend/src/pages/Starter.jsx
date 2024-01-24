import Start from "../assets/Start.png"
import { useNavigate } from "react-router-dom";

export default function Starter() {

    const navigate = useNavigate();

  return (
    <div className=" bg-[#1E1E1E] h-screen w-screen">
        <div className="absolute animate__animated animate__fadeInLeftBig  flex justify-end w-full">
            <img src={Start} className="h-[100vh] w-[45vw]" alt="" />
        </div>
        <div className="absolute pr-2 animate__animated animate__fadeInDownBig  bg-[#98DAD9]/30 w-[60vw] ">
            <div className="bg-[#98DAD9]/30 flex flex-col items-center gap-4 justify-center h-screen rounded-lg ">
                <div className="text-[#A4A4A4] text-3xl">
                    Pradhive
                </div>
                <div className="text-5xl font-bold text-white">
                    Login Page
                </div>
                <button className="hvr-float-shadow  cursor-pointer text-white mt-10 px-40 font-semibold rounded-lg py-2 bg-gradient-to-r from-[#263238] to-[#98DAD9]" onClick={()=>navigate("/login")}>
                    Let Start
                </button>
            </div>
        </div>
    </div>
  )
}
