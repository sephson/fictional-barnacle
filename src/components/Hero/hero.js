import React from "react";
import Typewriter from "typewriter-effect";
import "./hero.css";

const Hero = () => {
  return (
    <>
      {/* <p style={{ color: "#64ffda" }}>Hi, My name is</p> */}
      <div className="hero">
        <div className="typewriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi, I'm Disu Oluwatoyin.").start();
            }}
          />
        </div>
        <p className="hero-body">
          I'm a software engineer who specializes in building software
          applications on the web. I work with Reactjs, Nodejs and MongoDB.
          Currently, I'm learning Python and also improving my problem solving
          skills by learning Data Structures and Algorithm.
        </p>
        <button>Get In Touch</button>
      </div>
    </>
  );
};

export default Hero;
