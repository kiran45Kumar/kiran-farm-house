import SideBar from "./SideBar";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Admin = () => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return (
    <div className="admin-dashboard m-0 p-0 roboto-regular-400">
      <div className="flex items-center">
        <SideBar />
        <div className="flex-1 0 p-6 overflow-auto ">
          <Outlet />  
        </div>      
      </div>
    </div>
  );
};
export default Admin;
