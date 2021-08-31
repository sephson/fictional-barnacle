import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const backtotop = () => {
  return (
    <div
      style={{ "margin-top": "0", "padding-top": "0", "text-align": "center" }}
      className="hero"
    >
      <button className="button">
        <Link smooth to="#home">
          Back to top
        </Link>
      </button>
    </div>
  );
};

export default backtotop;
