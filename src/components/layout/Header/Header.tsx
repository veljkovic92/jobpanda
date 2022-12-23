import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <section className={classes.header}>
      <div className={classes["header__header-left"]}>
        <Link to="/jobs">Jobs</Link>
        <Link to="/jobs">Companies</Link>
        <Link to="/jobs">Services</Link>
      </div>
      <div className={classes["header__header-right"]}>
        <Button variant="outline-primary">Login</Button>
        <Button variant="outline-danger">Register</Button>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
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
