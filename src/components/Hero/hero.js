import React from "react";
import Typewriter from "typewriter-effect";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      {/* <p style={{ color: "#64ffda" }}>Hi, My name is</p> */}
      <div className="hero" id="home">
        <div className="typewriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi, I'm Disu Oluwatoyin.").start();
            }}
          />
        </div>
        <p className="hero-body">
          Hello! My name is Disu and I'm a software engineer who enjoys bringing
          ideas into reality. I specialize in building fullstack applications on
          the web. I work with Reactjs, Nodejs and MongoDB.
        </p>
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
    </>
  );
};

export default Hero;
