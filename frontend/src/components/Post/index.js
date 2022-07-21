import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import "./style.css";

const Post = () => {
  return (
    <div className="post-card">
      <h3>Post title</h3>
      <p className="post-message">this is post message</p>
      <p className="post-author">
        <i>author name</i>
      </p>
      <div className="btns">
        <button className="btn btn-edit">
          <FiEdit /> Edit
        </button>
        <button className="btn btn-delete">
          <MdDelete /> Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
