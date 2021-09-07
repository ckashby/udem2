import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <>
      <div className={classes.modal}>
        <h3>Modal Title</h3>
        <p>Modal content....</p>
        <button>Close</button>
      </div>
    </>
  );
};

export default Modal;
