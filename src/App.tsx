import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/customers/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
