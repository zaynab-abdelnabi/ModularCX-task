import React, { useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import "./style.css";

const PostForm = ({
  onSubmit,
  defaultData = { title: "", message: "", author_name: "" },
  handleClose,
}) => {
  const [formData, setFormData] = useState(defaultData);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!defaultData?.title) {
      setFormData(defaultData);
    }
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <label className="label label-title" htmlFor="title">
        <span>Title</span>
        <input
          id="title"
          className="form-input"
          name="title"
          type="text"
          value={formData?.title}
          onChange={handleChange}
          required
        />
      </label>
      <label className="label label-message" htmlFor="message">
        <span>Message</span>
        <textarea
          id="message"
          className="form-input"
          name="message"
          rows="4"
          value={formData?.message}
          onChange={handleChange}
          required
        />
      </label>
      <label className="label label-author_name" htmlFor="author_name">
        <span>Author Name</span>
        <input
          id="author_name"
          className="form-input"
          name="author_name"
          type="text"
          value={formData?.author_name}
          onChange={handleChange}
          required
        />
      </label>
      <div className="btns">
        <button className="btn btn-submit" type="submit">
          Save
        </button>
        <button
          className="btn btn-cancel"
          type="button"
          onClick={() => {
            setFormData(defaultData);
            Swal.fire({
              title: "Your changes will not be saved",
              color: "#000",
              showCancelButton: true,
              confirmButtonColor: "rgb(212, 16, 16)",
              cancelButtonColor: "#555",
              confirmButtonText: "ignore",
            }).then((result) => {
              if (result.isConfirmed) {
                handleClose();
              }
            });
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PostForm;
