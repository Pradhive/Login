import Start from "../assets/Start.png";
import Cookies from "js-cookie";

function Home() {

  const handleLogout = () => {
    Cookies.remove("jwtToken");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  return (
      <div className=" bg-[#1E1E1E] h-screen w-screen">
      <div className="absolute animate__animated animate__fadeInLeftBig  flex justify-end w-full">
        <img src={Start} className="h-[100vh] w-[45vw]" alt="" />
      </div>
      <div className="absolute pr-2 animate__animated animate__fadeInDownBig  bg-[#98DAD9]/30 w-[60vw] ">
        <div className="bg-[#98DAD9]/30 flex flex-col items-center gap-4 justify-center h-screen rounded-lg ">
          <div className="text-[#e1e1e1] font-bold text-3xl">Hii👋</div>
          <button
            className="hvr-float-shadow  cursor-pointer text-white mt-10 px-40 font-semibold rounded-lg py-2 bg-gradient-to-r from-[#263238] to-[#98DAD9]"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home