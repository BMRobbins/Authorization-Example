import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.name_container}>
        <h1 className={`serif ${classes.name}`}>Authorization Example</h1>
      </div>
      <div className={classes.link_container}>
        {props.isLoggedIn && (
          <a
            href="/#"
            className={`san-serif ${classes.link}`}
            onClick={props.logoutHandler}
          >
            Logout
          </a>
        )}
      </div>
    </nav>
  );
};

export default Header;
