import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./SuggestedJobs.module.scss";

const SuggestedJobs = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className={classes["suggested-jobs"]}>
      <h2>Jobs you may be interested in</h2>
      <Carousel responsive={responsive}>
        <div>
          <img />
          <h4>Example Job</h4>
          <span>Company Name</span>
          <span>Rating</span>
          <br />
          <span>Location</span>
          <span>Experience</span>
        </div>
        <div>
          <img />
          <h4>Example Job</h4>
          <span>Company Name</span>
          <span>Rating</span>
          <br />
          <span>Location</span>
          <span>Experience</span>
        </div>
        <div>
          <img />
          <h4>Example Job</h4>
          <span>Company Name</span>
          <span>Rating</span>
          <br />
          <span>Location</span>
          <span>Experience</span>
        </div>
        <div>
          <img />
          <h4>Example Job</h4>
          <span>Company Name</span>
          <span>Rating</span>
          <br />
          <span>Location</span>
          <span>Experience</span>
        </div>
        <div>
          <img />
          <h4>Example Job</h4>
          <span>Company Name</span>
          <span>Rating</span>
          <br />
          <span>Location</span>
          <span>Experience</span>
        </div>
      </Carousel>
    </section>
  );
};

export default SuggestedJobs;
