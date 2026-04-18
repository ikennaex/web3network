import React from "react";
import Navbar from "./components/navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import BackupPage from "./pages/BackupPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/connect/:id" element={<BackupPage />} />
      </Routes>
    </div>
  );
};

export default App;
