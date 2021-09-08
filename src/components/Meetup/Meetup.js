import Card from "../UI/Card/Card";

const Meetup = (props) => {
  return (
    <>
      <div>
        <h3>{props.title}</h3>
        <p>{props.address}</p>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default Meetup;
