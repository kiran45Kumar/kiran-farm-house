import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Admin from "./components/admin/Admin";
import Home from "./components/home/Home";
import AddGallery from "./components/admin/AddGallery";
import AdminContent from "./components/admin/AdminContent";
import AdminLogin from "./components/admin/AdminLogin";
import AddCategory from "./components/admin/AddCategory";

AOS.init({
  duration: 2000,
  easing: "ease",
  once: true,
  delay: 200,
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/gallery/add" element={<AddGallery />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/category/add" element={<AddCategory />} />
           {/* <Route index element={<AdminContent />} /> */}
          {/* <Route path="contacts" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
