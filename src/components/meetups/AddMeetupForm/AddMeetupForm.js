import Card from "../../UI/Card/Card";
import classes from "./AddMeetupForm.module.css";

const AddMeetupForm = (props) => {
  return (
    <>
      <Card>
        <form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Image - URL: </label>
            <input type="url" required id="image" />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address: </label>
            <input type="text" required id="address" />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description: </label>
            <textarea required id="description" rows="8" />
          </div>
        </form>
      </Card>
    </>
  );
};

export default AddMeetupForm;
