import { useState, useRef } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    zip: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const zipInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredZip = zipInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredZipIsValid = isFiveChars(enteredZip);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      zip: enteredZipIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredZipIsValid;

    if (!formIsValid) {
      return;
    }
  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const zipControlClasses = `${classes.control} ${
    formInputValidity.zip ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" ref={nameInputRef} />
      </div>
      {!formInputValidity.name && <p>Please enter a valid name.</p>}
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetInputRef} />
      </div>
      {!formInputValidity.street && <p>Please enter a valid street.</p>}
      <div className={zipControlClasses}>
        <label htmlFor="zip">Zip Code</label>
        <input id="zip" type="text" ref={zipInputRef} />
      </div>
      {!formInputValidity.zip && (
        <p>Please enter a valid zip code (5 characters long)!</p>
      )}
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityInputRef} />
      </div>
      {!formInputValidity.city && <p>Please enter a valid city.</p>}
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
