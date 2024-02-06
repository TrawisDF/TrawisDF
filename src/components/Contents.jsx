
import React from "react";
import { useNavigate } from "react-router";

const Contents = () => {
  const navigate = useNavigate()
  const toAbout =()=>{
    navigate('/about')
  }
  return (
    <>
      <div className="main">
        <h1>
          Hello!! &#9995; <br />
          I am <br />
        </h1>
        <h2>Tawid Khantiyoo</h2>
        <h3>Full Stack Developer</h3>
        <p>
          Recent master's degree graduate in civil engineering, now
          transitioning into a role as a Full Stack Web Developer. Combining
          analytical skills in problem-solving with a newfound passion for
          coding and web development, I am eager to contribute to innovative
          projects and kickstart the career path that I have chosen in the tech
          industry.
        </p>
        <button className="get-start" onClick={toAbout}>Get started</button>
      </div>
      <div className="image-wrapper">
        <img src="image.jpg" alt="Astroniod" />
      </div>
    </>
  );
};

export default Contents;
