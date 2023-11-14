import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./pages/UserList";
import Register from "./pages/Register";
import Login from "./pages/Login";

function Home() {
  return (
    <div>
      <button>
        <Link to="/api/users">UserList</Link>
      </button>
      <button>
        <Link to="/api/auth/register">Register</Link>
      </button>
      <button>
        <Link to="/api/auth/login">Login</Link>
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/users" element={<UserList />} />
        <Route path="/api/auth/register" element={<Register />} />
        <Route path="/api/auth/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
