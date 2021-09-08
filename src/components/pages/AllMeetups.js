import Meetup from "../../components/Meetup/Meetup";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "React Design Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "Redux and React Hooks Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetupsPage = (props) => {
  return (
    <>
      <div>All Meetups Page</div>
      {DUMMY_DATA.map((data) => {
        return (
          <ul>
            <li>
              <Meetup
                title={data.title}
                address={data.address}
                description={data.description}
              />
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default AllMeetupsPage;
