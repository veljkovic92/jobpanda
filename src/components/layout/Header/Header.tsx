import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { getAuth, signOut } from "firebase/auth";
import { useIdToken } from "react-firebase-hooks/auth";

const Header = () => {
  const auth = getAuth();
  const [user, loading, error] = useIdToken(auth);

  const onSignOutHandler = () => {
    signOut(auth);
  };

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
        {!user && (
          <NavLink to="/login">
            <Button
              variant="outline-primary"
              className={classes["header__header-right__button"]}
            >
              Login
            </Button>
          </NavLink>
        )}
        {!user && (
          <NavLink to="/register">
            <Button
              variant="outline-danger"
              className={classes["header__header-right__button"]}
            >
              Register
            </Button>
          </NavLink>
        )}

        {user && (
          <NavLink to="/profile">
            <Button
              variant="outline-danger"
              className={classes["header__header-right__button"]}
            >
              Profile
            </Button>
          </NavLink>
        )}

        {user && (
          <NavLink to="/">
            <Button
              variant="outline-danger"
              className={classes["header__header-right__button"]}
              onClick={onSignOutHandler}
            >
              Sign Out
            </Button>
          </NavLink>
        )}

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
