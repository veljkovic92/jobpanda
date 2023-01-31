import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <section className={classes.header}>
      <div className={classes["header__header-left"]}>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive
              ? `${classes["header__header-left--link__active"]} ${classes["header__header-left--link"]}`
              : classes["header__header-left--link"]
          }
        >
          Jobs
        </NavLink>
        <NavLink
          to="/companies"
          className={({ isActive }) =>
            isActive
              ? `${classes["header__header-left--link__active"]} ${classes["header__header-left--link"]}`
              : classes["header__header-left--link"]
          }
        >
          Companies
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? `${classes["header__header-left--link__active"]} ${classes["header__header-left--link"]}`
              : classes["header__header-left--link"]
          }
        >
          Services
        </NavLink>
      </div>
      <div className={classes["header__header-middle"]}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${classes["header__header-middle__active"]} ${classes["header__header-middle"]}`
              : classes["header__header-middle"]
          }
        >
          JobPanda
        </NavLink>
      </div>
      <div className={classes["header__header-right"]}>
        <NavLink to="/login">
          <Button
            variant="outline-primary"
            className={classes["header__header-right__button"]}
          >
            Login
          </Button>
        </NavLink>

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
