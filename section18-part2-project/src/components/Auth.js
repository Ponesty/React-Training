import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  const showAuth = (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );

  return <React.Fragment>{!auth && showAuth}</React.Fragment>;
};

export default Auth;
