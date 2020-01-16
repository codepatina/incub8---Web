import React, { useState } from "react";
import { LoginContext } from "../context/loginContext";
import { Router } from "@reach/router";
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Builders from '../pages/Builders'
import Ideas from '../pages/Ideas'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateIdea from '../pages/CreateIdea'
import About from '../pages/About'
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user_id, setUserID] = useState(localStorage.getItem("user_id") || "");
  const [user, setUser] = useState(localStorage.getItem("user") || "");

  return (
    <LoginContext.Provider
      value={{
        token,
        user,
        user_id,
        setToken,
        setUser,
        setUserID
      }}
    >
     <Navbar />
      <Router>
        <Home path="/" />
        <Login path="login" />
        <Register path="register" />
        <Builders path="builders" />
        <Ideas path="ideas" />
        <CreateIdea path="create" />
        <About path="about" />
      </Router>
    </LoginContext.Provider>
  );
};

export default App;