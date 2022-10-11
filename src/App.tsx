import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import DashboardFrame from "./components/DashboardFrame/DashboardFrame";
import Login from "./pages/Login/Login";
import UserDetails from "./pages/UserDetails/UserDetails";
import Users from "./pages/Users/Users";

const App: React.FC = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  useEffect(() => {
    setIsUserLoggedIn(Boolean(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isUserLoggedIn ? (
              <Navigate replace to="/dashboard/customers/users" />
            ) : (
              <Login />
            )
          }
        />
        <Route path="/dashboard/customers/users" element={<Users />} />
        <Route
          path="/dashboard/customers/users/:id"
          element={<UserDetails />}
        />
      </Routes>
    </Router>
  );
};

export default App;
