import { IoIosClose } from "react-icons/io";
import "./style.css";

const Modal = ({ title, handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <IoIosClose onClick={handleClose} />
        <div className="modal-header">
          <h3>{title}</h3>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Modal;
