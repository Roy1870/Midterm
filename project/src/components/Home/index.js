import React from "react";
import { useLocation } from "react-router-dom";
import CustomNav from "../CustomNav";
import Main from "../Main";

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <CustomNav />
      <div>
        {location.pathname === "/" && <Main />}
      </div>
    </div>
  );
};

export default Home;
