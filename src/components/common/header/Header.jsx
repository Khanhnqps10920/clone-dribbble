import React, { useState } from "react";
import PropTypes from "prop-types";

// style
import "./header.styles.scss";

// lib
// component

const Header = (props) => {
  const [width, setWitdh] = useState(window.innerWidth);

  return (
    <header className="header">
      {width}
      <button
        onClick={() => {
          setWitdh(width + 1);
        }}
      >
        Click
      </button>
    </header>
  );
};

Header.propTypes = {};

export default Header;
