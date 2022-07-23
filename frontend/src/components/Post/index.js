import React, { useState } from "react";
import axios from "axios";
import { Modal, PostForm } from "../index";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import "animate.css";
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
        Swal.fire({
          title: "Edited Successfully",
          confirmButtonColor: "rgb(128, 0, 128)",
          timer: 1000,
        });
        refresh();
      })
      .catch((err) => console.log(err));
  };

  const deletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      color: "#000",
      showCancelButton: true,
      confirmButtonColor: "rgb(212, 16, 16)",
      cancelButtonColor: "#555",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/api/posts/${id}`)
          .then((res) => {
            console.log(res);
            refresh();
            Swal.fire({
              title: "Deleted!",
              confirmButtonColor: "rgb(128, 0, 128)",
              timer: 1000,
            });
          })
          .catch((err) => console.log(err));
      }
    });
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
