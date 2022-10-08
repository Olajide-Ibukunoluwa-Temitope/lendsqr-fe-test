import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Login from './pages/Login/Login';

const App:React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/dashboard/customers/users" element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
