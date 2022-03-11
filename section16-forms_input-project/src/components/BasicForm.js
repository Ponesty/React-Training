import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstInputHasError,
    valueChangeHandler: firstChangeHandler,
    inputBlurHandler: firstBlurHandler,
    reset: resetfirstInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastInputHasError,
    valueChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    reset: resetlastInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemailInput,
  } = useInput((value) => value.includes("@"));

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [firstNameIsValid, lastNameIsValid, emailIsValid]);

  const firstInputClasses = firstInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastInputClasses = lastInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const formSubmitHandler = (event) => {
    event.preventDefault();
    resetfirstInput();
    resetlastInput();
    resetemailInput();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={firstBlurHandler}
            onChange={firstChangeHandler}
            value={firstName}
          />
          {firstInputHasError && (
            <p className="error-text">Please enter a valid first name.</p>
          )}
        </div>
        <div className={lastInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onBlur={lastBlurHandler}
            onChange={lastChangeHandler}
            value={lastName}
          />
          {lastInputHasError && (
            <p className="error-text">Please enter a valid last name.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={email}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
