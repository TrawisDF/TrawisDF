import React from "react";

import "../components/About.css";
const About = () => {
  return (
    <div className="contents">
      <div className="main-about">
        <h1>Why I am here❔</h1>
        <h3>Why I chose this path❔</h3>
        <p>
          During my master's degree program, I had the opportunity to delve into
          programming due to the nature of my field, which revolves around
          optimizing solutions to achieve maximum efficiency under specified
          conditions (Optimization Problems). The programming tool utilized for
          this purpose was CPLEX. I specifically chose research topics related
          to these areas, and throughout the research process, I incorporated
          Python to enhance and complement the analysis. Starting with no
          programming skills, I learned to code concurrently with my research.
          During this period, I discovered a genuine passion for programming.{" "}
          <br />
          <br />
          When it came time to decide between sticking with the familiar and
          stable career path and venturing into a completely new one, it seemed
          risky to choose something that challenged my established career.
          However, I believe I can excel in it, and I won't find true happiness
          in my work if I choose a career path that I'm not passionate about. It
          brought me to this point, and I believe I can thrive here.
        </p>
        <h3>What I have done from the start in my chosen field❔</h3>
        
        <h3>Why you have to hire me❔</h3>
      </div>
      <div className="image-wrapper">
        <img src="Why.png" alt="Why?" />
      </div>
    </div>
  );
};

export default About;
