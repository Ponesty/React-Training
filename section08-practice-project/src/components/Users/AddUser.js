import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const userInputChangeHandler = (event) => {
    setUsernameInput(event.target.value);
  };
  const ageInputChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setErrorMessage({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      setShowError(true);
      return;
    }
    if (+ageInput < 1) {
      setErrorMessage({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      setShowError(true);
      return;
    }
    props.onAddUser(usernameInput, ageInput);
    setUsernameInput("");
    setAgeInput("");
  };

  const hideModal = () => {
    setShowError(false);
  };

  return (
    <Wrapper>
      {showError && (
        <ErrorModal
          title={errorMessage.title}
          message={errorMessage.message}
          onHideModal={hideModal}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={usernameInput}
            onChange={userInputChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={ageInput}
            onChange={ageInputChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
