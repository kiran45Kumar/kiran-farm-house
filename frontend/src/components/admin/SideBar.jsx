import { CiHome } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { SiGooglephotos } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";
import { BiCategory } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("adminToken");
    toast.success("Logout Successfull..");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div>
      <div className="admin-sidebar bg-white text-black w-80 rounded-2xl min-h-187.5 h-187.5 shadow-2xl">
        <h1 className=" text-3xl roboto-regular-400 m-5 p-5">
          <span className=" text-4xl font-bold bg-linear-to-r from-orange-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
            Kadagam
          </span>
        </h1>
        <ul className="mx-9 my-15 text-lg">
          <div className="flex items-center gap-2 my-9 py-2 rounded-md">
            <CiHome fontSize={"25px"} fontWeight={"900"} color="blue" />
            <NavLink
              to={"/admin"}
              className="cursor-pointer text-[18px] text-4xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Dashboard
            </NavLink>
          </div>
          <div className="flex items-center gap-2 my-8">
            <LuUsers fontSize={"22px"} className="text-gray-400" />
            <NavLink className="cursor-pointer text-[15px] text-gray-400 hover:opacity-[0.7] transition-all delay-100">
              Contacts
            </NavLink>
          </div>
          <div className="flex items-center gap-2 my-8">
            <VscFeedback fontSize={"22px"} className="text-gray-400" />
            <NavLink
              to={"/admin/testimonial/add"}
              className="cursor-pointer text-[15px] text-gray-400 hover:opacity-[0.7] transition-all delay-100"
            >
              Testimonials
            </NavLink>
          </div>
          <div className="flex items-center gap-2 my-8">
            <SiGooglephotos fontSize={"22px"} className="text-gray-400" />

            <NavLink
              to="/admin/gallery/add"
              className="cursor-pointer text-[15px] text-gray-400 hover:opacity-[0.7] transition-all delay-100"
            >
              Galleries
            </NavLink>
          </div>
          <div className="flex items-center gap-2 my-8">
            <BiCategory fontSize={"22px"} className="text-gray-400" />
            <NavLink
              to="/admin/category/add"
              className="cursor-pointer text-[15px] text-gray-400 hover:opacity-[0.7] transition-all delay-100"
            >
              Categories
            </NavLink>
          </div>
          <div className="flex items-center gap-2 my-8">
            <PiSignOutBold fontSize={"22px"} className="text-gray-400" />
            <NavLink
              onClick={signOut}
              className="cursor-pointer text-[15px] text-gray-400 hover:opacity-[0.7] transition-all delay-100"
            >
              Sign Out
            </NavLink>
          </div>
        </ul>
        <div className="flex justify-center mt-20">
          <div className="w-72 h-44 bg-white rounded-xl shadow-md border border-gray-100 
                  p-6 flex flex-col justify-between hover:shadow-lg transition duration-300">

            <div>
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white text-sm font-bold">
                K
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Focus Mode
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Stay hungry. Stay Foolish
              </p>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Active</span>
              <button onClick={(e)=>window.location.replace("/")} className="text-black font-medium hover:underline">
                Open →
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SideBar;
