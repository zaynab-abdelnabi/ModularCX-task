import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Modal from "../Modal";
import PostForm from "../PostForm";
import "./style.css";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
        <PostForm />
      </Modal>
    </>
  );
};

export default Navbar;
