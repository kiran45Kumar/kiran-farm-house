import AddGallery from "./AddGallery";
import AdminContent from "./AdminContent";
import SideBar from "./SideBar";
import { Navigate } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
const Admin = () => {
   const location = useNavigate();
   const token = localStorage.getItem("adminToken");
    if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return (
    <div className="admin-dashboard m-0 p-0 roboto-regular-400">
      <div className="flex items-center">
        <SideBar/>
      <AdminContent/>
      </div>
    </div>
  );
};
export default Admin;
