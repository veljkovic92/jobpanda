import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <section className={classes.header}>
      <div className={classes["header__header-left"]}>
        <Link to="/jobs" className={classes["header__header-left--link"]}>
          Jobs
        </Link>
        <Link to="/jobs" className={classes["header__header-left--link"]}>
          Companies
        </Link>
        <Link to="/jobs" className={classes["header__header-left--link"]}>
          Services
        </Link>
      </div>
      <div className={classes["header__header-middle"]}>
        <Link to="/" className={classes["header__header-middle__title"]}>JobPanda</Link>
      </div>
      <div className={classes["header__header-right"]}>
        <Button
          variant="outline-primary"
          className={classes["header__header-right__button"]}
        >
          Login
        </Button>
        <Button
          variant="outline-danger"
          className={classes["header__header-right__button"]}
        >
          Register
        </Button>
        <Dropdown>
          <Dropdown.Toggle
            variant="outline-success"
            id="dropdown-basic"
            className={classes["header__header-right__button"]}
          >
            For employers
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Employer Login</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Hiring Solutions</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Contact Us</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </section>
  );
};

export default Header;
