import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Posts } from "../../components";
import "./style.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    axios
      .get(`http://localhost:3000/api/posts`)
      .then((res) => {
        setPosts(res.data.response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar refresh={getCustomers} />
      <div className="main-container">
        <Posts isLoading={isLoading} posts={posts} refresh={getCustomers} />
      </div>
    </>
  );
};

export default Home;
