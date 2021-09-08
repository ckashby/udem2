import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  return (
    <>
      <li>
        <div>
          <img src={props.image} alt={props.image} />
        </div>
        <div>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div>
          <button>Add to favorites</button>
        </div>
      </li>
    </>
  );
};

export default MeetupItem;
