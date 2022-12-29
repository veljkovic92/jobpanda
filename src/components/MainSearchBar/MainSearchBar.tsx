import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./MainSearchBar.module.scss";
import { BsSearch } from "react-icons/bs";

const MainSearchBar = () => {
  return (
    <section className={classes.search}>
      <div className={classes["search__intro"]}>
        <h1>Find your dream job now</h1>
        <p>5k+ jobs for you to explore</p>
      </div>

      <Form className={classes["search__form"]}>
        <BsSearch size="80px"/>
        <Form.Control
          type="text"
          placeholder="Enter skills / designations / companies"
        />
        <Form.Select aria-label="Default select example">
          <option>Select experience</option>
          {Array.from({ length: 30 }, (_, i) => i + 1).map((option) => (
            <option value={option} key={option}>
              {option} {option === 1 ? "year" : "years"}
            </option>
          ))}
        </Form.Select>
        <Form.Control type="text" placeholder="Enter location" />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </section>
  );
};

export default MainSearchBar;
