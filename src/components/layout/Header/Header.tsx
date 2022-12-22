import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <section className={classes.header}>
      <div className={classes["header-left"]}>
        <Link to="/jobs">Jobs</Link>
        <Link to="/jobs">Companies</Link>
        <Link to="/jobs">Services</Link>
      </div>
      <div className={classes["header-right"]}>
        <button>Login</button>
        <button>Register</button>
        <button>For employers</button>
      </div>
    </section>
  );
};

export default Header;
