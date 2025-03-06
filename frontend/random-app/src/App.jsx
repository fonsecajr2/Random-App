import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./pages/Auth/LoginForm";
import SignUpForm from "./pages/Auth/SignUpForm";
import Home from "./pages/Dashboard/Home";
import Feed from "./pages/feed/Feed";
import { PostProvider } from "./context/PostContext";
import "./App.css";

const App = () => {
  return (
    <PostProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signUp" element={<SignUpForm />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
    </PostProvider>
  );
};

// Defining the Root Component to handle the initial redirect
const Root = () => {
  // Check if token exists in local storage
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
};

export default App;
