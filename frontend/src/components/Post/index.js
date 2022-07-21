import React, { useState } from "react";
import { Modal, PostForm } from "../index";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import "./style.css";

const Post = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="post-card">
        <h3>Post title</h3>
        <p className="post-message">this is post message</p>
        <p className="post-author">
          <i>author name</i>
        </p>
        <div className="btns">
          <button className="btn btn-edit" onClick={handleOpenModal}>
            <FiEdit /> Edit
          </button>
          <button className="btn btn-delete">
            <MdDelete /> Delete
          </button>
        </div>
      </div>
      <Modal title="Edit Post" show={openModal} handleClose={handleCloseModal}>
        <PostForm />
      </Modal>
    </>
  );
};

export default Post;
