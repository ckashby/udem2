import React from "react";
import "./AddUser.css";

const AddUser = () => {
  const onSub = () => {
    alert("Hello");
  };

  return (
    <>
      <h1>Add User</h1>
      <form onSubmit={onSub}>
        <label>Name</label>
        <input type="text" placeholder="Enter name" />
        <br />
        <label>Age</label>
        <input type="text" placeholder="Enter age" />
        <br />
        <button type="submit">Create new user</button>
      </form>
    </>
  );
};

export default AddUser;
