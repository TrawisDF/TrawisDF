import React from "react";

import { Accordion } from "react-bootstrap";
import "../components/About.css";
const About = () => {
  return (
    <>
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

        <h3>Career Aspirations</h3>
        <p>
          From the things that I have no clue about it. Became so I can learn
          and practice with it all day long. I am really passionate to do
          coding, thinking, problem-solving, and learning new things in this
          career that I have chosen. My life plan is to master this field and be
          able to work from home proficiently. Throughout the kickstart of my
          career full of passion, I would dedicate my time to hone the technical
          skills that are necessary for this industry with my good personality
          such as fast learner, ability to adapt quickly, problem-solving and
          positive thinking
        </p>
        <h3>Education and Certifications</h3>
        <ul className="certifications">
          <li className="certificate">
            <h4>พัฒนาเว็บแอพพลิเคชั่นด้วย React (Real-World Projects)</h4>

            <ul className="cert-details">
              <li className="cert-detail">
                <p>
                  <b>Platform:</b> Udemy
                </p>
              </li>
              <li className="cert-detail">
                <p>
                  <b>Issued by:</b> September 2023
                </p>
              </li>
              <li className="cert-detail">
                <a
                  className="cert-link"
                  href="https://www.udemy.com/certificate/UC-5d093ae5-7058-40bb-802c-8508d2953e99/"
                  target="_blank"
                >
                  <p>Certificate Link!</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="certificate">
            <h4>พัฒนาเว็บด้วย JavaScript แบบ MERN Stack</h4>

            <ul className="cert-details">
              <li className="cert-detail">
                <p>
                  <b>Platform:</b> Udemy
                </p>
              </li>
              <li className="cert-detail">
                <p>
                  <b>Issued by:</b> October 2023
                </p>
              </li>
              <li className="cert-detail">
                <a
                  className="cert-link"
                  href="https://www.udemy.com/certificate/UC-53936c1f-10c9-43a4-85a2-61791aa85368/"
                  target="_blank"
                >
                  <p>Certificate Link!</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="certificate">
            <h4>MERN From Scratch 2023 | eCommerce Platform</h4>

            <ul className="cert-details">
              <li className="cert-detail">
                <p>
                  <b>Platform:</b> Udemy
                </p>
              </li>
              <li className="cert-detail">
                <p>
                  <b>Issued by:</b> December 2023
                </p>
              </li>
              <li className="cert-detail">
                <a
                  className="cert-link"
                  href="https://www.udemy.com/certificate/UC-728fceb4-f0ce-41d7-8af0-73f9077e6b5c/"
                  target="_blank"
                >
                  <p>Certificate Link!</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="image-wrapper">
        <img src="Why.png" alt="Why?" />
      </div>
    </>
  );
};

export default About;
