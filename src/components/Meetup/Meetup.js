import Card from "../UI/Card/Card";
import classes from "./Meetup.module.css";

const Meetup = (props) => {
  return (
    <>
      <Card>
        <div className={classes.meetup}>
          <h3>{props.title}</h3>
          <p>{props.address}</p>
          <p>{props.description}</p>
        </div>
      </Card>
    </>
  );
};

export default Meetup;
