import React from "react";
import CreateNewUserCard from "./CreateNewUserCard";
import LoginCard from "./LoginCard";
import classes from "./LogInUI.module.css";
import { useState } from "react";

const LogInUI = (props) => {
  const [showNewUserUI, setNewUserUI] = useState(false);

  const showNewUserHandler = () => {
    setNewUserUI(true);
  };

  const hideNewUserHandler = () => {
    setNewUserUI(false);
  };

  return (
    <div className={classes.log_in_container}>
      <h1 className={`serif ${classes.log_in_title}`}>
        Welcome to Authorization Example
      </h1>
      <p className={`san-serif ${classes.log_in_description}`}>
        Please login to get full access to our amazing webpage
      </p>
      {!showNewUserUI && (
        <LoginCard
          loginHandler={props.loginHandler}
          showNewUserHandler={showNewUserHandler}
        />
      )}
      {showNewUserUI && (
        <CreateNewUserCard
          loginHandler={props.loginHandler}
          hideNewUserHandler={hideNewUserHandler}
        />
      )}
    </div>
  );
};

export default LogInUI;
