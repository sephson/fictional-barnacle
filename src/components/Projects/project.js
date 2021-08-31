import React from "react";
import "./project.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import TwitterIcon from "@material-ui/icons/Twitter";

const about = () => {
  return (
    <div style={{ "margin-top": "0", "padding-top": "0" }} className="hero">
      <h3 style={{ color: "#64ffda" }}>Projects</h3>
      <div className="my-projects">
        <div className="single-proj">
          <h4 className="proj-title">EventGo</h4>
          <p className="desc">
            This is an event management web application. Users can create either
            paid or free and then view people who registered for their event.
            Users can also find event to attend.
          </p>
          <p className="stacks">Express, React, Redux, MongoDB</p>
        </div>
        <div className="single-proj">
          <h4 className="proj-title">EventGo</h4>
          <p className="desc">
            This is an event management web application. Users can create either
            paid or free and then view people who registered for their event.
            Users can also find event to attend.
          </p>
          <p className="stacks">Express, React, Redux, MongoDB</p>
        </div>
        <div className="single-proj">
          <h4 className="proj-title">EventGo</h4>
          <p className="desc">
            This is an event management web application. Users can create either
            paid or free and then view people who registered for their event.
            Users can also find event to attend.
          </p>
          <p className="stacks">Express, React, Redux, MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default about;
