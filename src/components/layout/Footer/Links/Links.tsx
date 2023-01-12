import React from "react";
import classes from "./Links.module.scss";
import Table from "react-bootstrap/Table";
import jobpanda from "../../../../assets/jobpanda.png"

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
const Links = () => {
  return (
    <main className={classes.links}>
      <section className={classes["links__left"]}>
        <img src={jobpanda}/>
        <span>Connect with us</span>
        <div className={classes["links__left__icons"]}>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterSquare />
          <AiFillLinkedin />
        </div>
      </section>
      <section className={classes["links__right"]}>
        <Table className={classes["links__right__table"]}>
          <tbody>
            <tr>
              <td>
                <a>About Us</a>
              </td>
              <td>
                <a>Careers</a>
              </td>
              <td>
                <a>Help Center</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Terms/Conditions</a>
              </td>
              <td>
                <a>Privacy Policy</a>
              </td>
              <td>Report an Issue</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </main>
  );
};

export default Links;
