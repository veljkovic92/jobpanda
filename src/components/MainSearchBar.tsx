import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./MainSearchBar.module.scss";
import { BsSearch } from "react-icons/bs";

const MainSearchBar = () => {
  return (
    <Form className={classes.form}>
      <BsSearch />
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
  );
};

export default MainSearchBar;
