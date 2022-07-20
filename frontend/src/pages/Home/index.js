import React from "react";
import { Navbar, Posts } from "../../components";
import "./style.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Posts />
      </div>
    </>
  );
};

export default Home;
