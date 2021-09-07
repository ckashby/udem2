import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div onClick={props.closeModal} className={classes.backdrop}></div>;
};

export default Backdrop;
