import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FiPlus } from "react-icons/fi";
import Modal from "../Modal";
import PostForm from "../PostForm";
import "./style.css";

const Navbar = ({ refresh }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const addNew = (data) => {
    axios
      .post(`http://localhost:3000/api/posts`, data)
      .then((res) => {
        handleCloseModal();
        Swal.fire({
          title: "Added Successfully",
          confirmButtonColor: 'rgb(128, 0, 128)', 
          timer: 1000,
        });
        refresh();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <nav className="navbar">
        <h3>Home</h3>
        <button className="btn btn-add" onClick={handleOpenModal}>
          <FiPlus />
          <span>Add</span>
        </button>
      </nav>
      <Modal
        title="Add New Post"
        show={openModal}
        handleClose={handleCloseModal}
      >
        <PostForm
          handleClose={handleCloseModal}
          onSubmit={addNew}
        />
      </Modal>
    </>
  );
};

export default Navbar;
