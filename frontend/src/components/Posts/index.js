import React from "react";
import Post from "../Post";
import "./style.css";

const Posts = ({ isLoading, refresh, posts }) => {
  return (
    <div className="posts-container">
      {isLoading ? (
        <div>Loading...</div>
      ) : posts !== [] ? (
        posts.map((post) => {
          return <Post key={post._id} data={post} refresh={refresh} />;
        })
      ) : (
        <div>No posts found</div>
      )}
    </div>
  );
};

export default Posts;
