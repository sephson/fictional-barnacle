import React from "react";
import "./project.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
const about = () => {
  return (
    <div
      style={{ "margin-top": "0", "padding-top": "0" }}
      className="hero"
      id="project"
    >
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
          <div className="proj-links">
            <Link
              to={{
                pathname: "https://github.com/sephson/EventGo",
              }}
              target="_blank"
            >
              <GitHubIcon />
            </Link>
            <>
              <VisibilityIcon />
            </>
          </div>
        </div>
        <div className="single-proj">
          <h4 className="proj-title">Bleet</h4>
          <p className="desc">
            This is a fullstack social media application with instant messaging,
            Some of its featues include creating a post, liking a post, deleting
            your post, sending direct msg, viewing and search for users,
            following and unfollowing user, editing profile bio, comment on
            posts etc.
          </p>
          <p className="stacks">Express, React, Context Api, Socket.io</p>
          <div className="proj-links">
            <Link
              to={{
                pathname: "https://github.com/sephson/Bleet-Project",
              }}
              target="_blank"
            >
              <GitHubIcon />
            </Link>
            <Link
              to={{
                pathname: "https://bleet.netlify.app/",
              }}
              target="_blank"
            >
              <VisibilityIcon />
            </Link>
          </div>
        </div>
        <div className="single-proj">
          <h4 className="proj-title">Manage</h4>
          <p className="desc">
            This is a landing page challenge from frontend mentors to horn my
            html and css skills.
          </p>
          <p className="stacks">HTML, SCSS, Javascript</p>
          <div className="proj-links">
            <Link
              to={{
                pathname: "https://github.com/sephson/Manage-Landing-Page",
              }}
              target="_blank"
            >
              <GitHubIcon />
            </Link>
            <Link
              to={{
                pathname: "https://sephson.github.io/Manage-Landing-Page/",
              }}
              target="_blank"
            >
              <VisibilityIcon />
            </Link>
          </div>
        </div>
        <div className="single-proj">
          <h4 className="proj-title">Movies App</h4>
          <p className="desc">
            This is a movies search application. I worked with external api
            MovieDB to display movies on the web application. Users can search
            for movies, view trending movies and also look at the details of a
            movie
          </p>
          <p className="stacks">React</p>
          <div className="proj-links">
            <Link
              to={{
                pathname: "https://github.com/sephson/React-Movies-Search-App",
              }}
              target="_blank"
            >
              <GitHubIcon />
            </Link>
            <Link
              to={{
                pathname: "https://sephson.github.io/React-Movies-Search-App/",
              }}
              target="_blank"
            >
              <VisibilityIcon />
            </Link>
          </div>
        </div>
        <div className="single-proj">
          <h4 className="proj-title">Shortly</h4>
          <p className="desc">
            Shortly is a web appplication for shortening url of a website. I
            created the landing page for this application.
          </p>
          <p className="stacks">React</p>
          <div className="proj-links">
            <Link
              to={{
                pathname:
                  "https://github.com/sephson/homepage-urlshortner/tree/master",
              }}
              target="_blank"
            >
              <GitHubIcon />
            </Link>
            <Link
              to={{
                pathname: "https://sephson.github.io/homepage-urlshortner/",
              }}
              target="_blank"
            >
              <VisibilityIcon />
            </Link>
          </div>
        </div>
        <div className="single-proj">
          <h4 className="proj-title">EasyBank</h4>
          <p className="desc">Landing page for a potential bank's website</p>
          <p className="stacks">HTML, SCSS and JavaScript</p>
          <div className="proj-links">
            <Link
              to={{
                pathname:
                  "https://github.com/sephson/Landing-Page-EasyBank-Website",
              }}
              target="_blank"
            >
              <GitHubIcon />
            </Link>
            <Link
              to={{
                pathname:
                  "https://sephson.github.io/Landing-Page-EasyBank-Website/",
              }}
              target="_blank"
            >
              <VisibilityIcon />
            </Link>
          </div>
        </div>
        <div className="single-proj">
          <h4 className="proj-title">Weather App</h4>
          <p className="desc">
            This is a web application used to check my weather using an external
            api. Users can search for any location's weather and also get their
            current location's weather using web geolocation api
          </p>
          <p className="stacks">JavaScript, HTML and CSS</p>
          <div className="proj-links">
            <Link
              to={{
                pathname: "https://github.com/sephson/weather-app",
              }}
              target="_blank"
            >
              <GitHubIcon />
            </Link>
            <Link
              to={{
                pathname: "https://sephson.github.io/weather-app/",
              }}
              target="_blank"
            >
              <VisibilityIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
