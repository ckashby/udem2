import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Backdrop from "./components/UI/Backdrop/Backdrop";
import Modal from "./components/UI/Modal/Modal";
import AddUser from "./components/Users/AddUser";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(true);

  const showModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <p>From App.js</p>
      {showModal && (
        <>
          <Backdrop closeModal={showModalToggle} />
          <Modal closeModal={showModalToggle} />
        </>
      )}
      <AddUser />
      {showModal.toString()}
      <button onClick={showModalToggle}>Toggle</button>
    </div>
  );
}

export default App;
