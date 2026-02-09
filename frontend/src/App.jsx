import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
