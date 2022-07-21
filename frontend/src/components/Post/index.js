import React, { useState } from "react";
import axios from "axios";
import { Modal, PostForm } from "../index";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import "./style.css";

const Post = ({ data, refresh }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const editPost = (editedData) => {
    axios
      .put(`http://localhost:3000/api/posts/${data._id}`, editedData)
      .then((res) => {
        handleCloseModal();
        refresh();
      })
      .catch((err) => console.log(err));
  };

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        refresh();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="post-card">
        <h3>{data.title}</h3>
        <p className="post-message">{data.message}</p>
        <p className="post-author">
          <i>{data.author_name}</i>
        </p>
        <div className="btns">
          <button className="btn btn-edit" onClick={handleOpenModal}>
            <FiEdit /> Edit
          </button>
          <button
            className="btn btn-delete"
            onClick={() => deletePost(data._id)}
          >
            <MdDelete /> Delete
          </button>
        </div>
      </div>
      <Modal title="Edit Post" show={openModal} handleClose={handleCloseModal}>
        <PostForm
          onSubmit={editPost}
          defaultData={{
            title: data.title,
            message: data.message,
            author_name: data.author_name,
          }}
          handleClose={handleCloseModal}
        />
      </Modal>
    </>
  );
};

export default Post;
