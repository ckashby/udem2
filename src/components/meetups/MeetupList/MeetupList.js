import MeetupItem from "../MeetupItem/MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <MeetupItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          address={item.address}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
