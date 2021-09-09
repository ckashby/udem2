import MeetupItem from "../MeetupItem/MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <MeetupItem key={item.id}>{item.title}</MeetupItem>
      ))}
    </ul>
  );
};

export default MeetupList;
