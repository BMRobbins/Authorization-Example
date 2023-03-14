import React from "react";
import classes from "./UserContent.module.css";

const UserContent = () => {
  return (
    <div className={classes.user_content_container}>
      <h1 className={`serif ${classes.user_content_title}`}>
        Congratulations You Have Logged In!
      </h1>
      <img
        className={classes.dog_image}
        src={require("../images/prettyDog.png")}
        alt="Pretty Dog"
      ></img>
    </div>
  );
};

export default UserContent;
