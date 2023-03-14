import Button from "./Button";
import classes from "./CreateNewUserCard.module.css";

const CreateNewUserCard = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.loginHandler();
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.card_container}>
      <h2 className={`serif ${classes.card_title}`}>Create New User</h2>
      <hr />
      <div className={classes.form_input_container}>
        <label htmlFor="username" className={`san-serif ${classes.label}`}>
          Username
        </label>
        <input
          autoComplete="username"
          className={classes.input}
          id="username"
          type="text"
          required
        ></input>
        <label htmlFor="password" className={`san-serif ${classes.label}`}>
          Password
        </label>
        <input
          autoComplete="new-password"
          className={classes.input}
          id="password"
          type="password"
          required
        ></input>
        <label htmlFor="email" className={`san-serif ${classes.label}`}>
          Email
        </label>
        <input
          className={classes.input}
          id="email"
          type="email"
          required
        ></input>
        <label htmlFor="phone" className={`san-serif ${classes.label}`}>
          Phone Number
        </label>
        <input className={classes.input} id="phone" type="tel" required></input>
      </div>
      <hr />
      <div className={classes.disclaimer_container}>
        <p className={classes.disclaimer}>
          Feel free to put any data in the username and password input sections,
          this UI does not connect to a real backend. This information is not
          validated other then checking that the fields aren't empty. No user
          data will be saved.
        </p>
      </div>
      <div className={classes.button_container}>
        <a href="/#" onClick={props.hideNewUserHandler}>
          Log In
        </a>
        <Button text="Sign Up" href={""}></Button>
      </div>
    </form>
  );
};

export default CreateNewUserCard;
