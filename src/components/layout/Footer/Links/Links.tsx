import React from "react";
import classes from "./Links.module.scss"
import Table from "react-bootstrap/Table";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
const Links = () => {
  return (
    <main className={classes.links}>
      <section className={classes["__left"]}>
        <img />
        <span>Connect with us</span>
        <div>
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillTwitterSquare />
        <AiFillLinkedin />
        </div>
        
      </section>
      <section>
        <Table>
          <thead></thead>
          <tbody>
            <tr>
              <td>Zoran</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Zoran</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>Zoran</td>
              <td>Larry the Bird</td>
              <td>Batko</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </main>
  );
};

export default Links;
