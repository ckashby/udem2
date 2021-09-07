import React from "react";

import Backdrop from "./components/UI/Backdrop/Backdrop";
import Modal from "./components/UI/Modal/Modal";
import AddUser from "./components/Users/AddUser";
import "./App.css";

function App() {
  return (
    <div>
      <p>From App.js</p>
      <Backdrop />
      <Modal />
      <AddUser />
    </div>
  );
}

export default App;
