import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import DashboardFrame from "./components/DashboardFrame/DashboardFrame";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <DashboardFrame>
        <Routes>
          <Route path="/dashboard/customers/users" element={<Users />} />
        </Routes>
      </DashboardFrame>
    </Router>
  );
};

export default App;
