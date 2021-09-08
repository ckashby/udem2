import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import AddMeetupPage from "./components/pages/AddMeetup";
import AllMeetupsPage from "./components/pages/AllMeetups";
import FavoritesPage from "./components/pages/Favorites";

import MainNavigation from "./components/layout/MainNavigation/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/add">
          <AddMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </>
  );
}

// import Backdrop from "./components/UI/Backdrop/Backdrop";
// import Modal from "./components/UI/Modal/Modal";
// import AddUser from "./components/Users/AddUser";
// import "./App.css";

// function App() {
//   const [showModal, setShowModal] = useState(true);

//   const showModalToggle = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <div>
//       <p>From App.js</p>
//       {showModal && (
//         <>
//           <Backdrop closeModal={showModalToggle} />
//           <Modal closeModal={showModalToggle} />
//         </>
//       )}
//       <AddUser />
//       {showModal.toString()}
//       <button onClick={showModalToggle}>Toggle</button>
//     </div>
//   );
// }

export default App;
