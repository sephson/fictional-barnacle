import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
const social = () => {
  return (
    <div
      style={{ "margin-top": "0", "padding-top": "0", "text-align": "center" }}
      className="hero"
      id="contact"
    >
      <h3 style={{ color: "#64ffda" }}>Socials</h3>
      <p>I'd be really glad to hear from you</p>
      <div
        style={{ display: "flex", gap: "2rem", "justify-content": "center" }}
      >
        <Link
          to={{
            pathname: "https://twitter.com/DisuJ0",
          }}
          target="_blank"
        >
          <TwitterIcon />
        </Link>
        <Link
          to={{
            pathname: "https://github.com/sephson",
          }}
          target="_blank"
        >
          <GitHubIcon />
        </Link>
        <Link
          to={{
            pathname: " https://www.linkedin.com/in/oluwatoyin-disu-1a655b171/",
          }}
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
      </div>
      <button className="button">
        <Link
          to={{
            pathname: "https://mail.google.com/mail/u/0/#inbox?compose=new",
          }}
          target="_blank"
        >
          Get In Touch
        </Link>
      </button>
    </div>
  );
};

export default social;
