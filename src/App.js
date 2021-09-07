import React from "react";

import Backdrop from "./components/UI/Backdrop/Backdrop";
import AddUser from "./components/Users/AddUser";
import "./App.css";

function App() {
  return (
    <div>
      <p>From App.js</p>
      <Backdrop />
      <AddUser />
    </div>
  );
}

export default App;
