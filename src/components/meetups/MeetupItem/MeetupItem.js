import Card from "../../UI/Card/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  return (
    <>
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.image} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button>Add to favorites</button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default MeetupItem;
