// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();  //to handle navigation in the app

  useEffect(() => {  //tells React to run this effect
    localStorage.setItem("user", "");  //removes the user data from the local storage
    navigate("/login");
  }, [navigate]);

  return null;
};

export default Logout;
