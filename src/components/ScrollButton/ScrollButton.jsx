import React, { useState, Fragment } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import classes from "./ScrollButton.module.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 700) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Fragment>
      {visible && (
        <button className={classes.button}>
          <FaArrowCircleUp onClick={scrollToTop} />
        </button>
      )}
    </Fragment>
  );
};

export default ScrollButton;
