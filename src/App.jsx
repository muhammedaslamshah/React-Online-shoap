import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeLoader />} />
            <Route path="/About" element={<AboutLoader />} />
            <Route path="/Contact" element={<ContactLoader />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;