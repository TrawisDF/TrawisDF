import React from "react";
import { useNavigate } from "react-router";

const Contents = () => {
  const navigate = useNavigate();
  const toAbout = () => {
    navigate("/about");
  };
  return (
    <div className="contents">
      <div className="main">
        <h1>
          Hello!! &#9995; <br />
          I am <br />
        </h1>
        <h2>Tawid Khantiyoo</h2>
        <h3>Frontend Web Developer</h3>
        <p>
          Fresh graduate student in civil transitioning to Web Developer as a
          Frontend Web Developer with <b>React.js</b> skills.
        </p>
        <button className="get-start" onClick={toAbout}>
          Get started
        </button>
      </div>
      <div className="image-wrapper">
        <img src="image.jpg" alt="Astroniod" />
      </div>
    </div>
  );
};

export default Contents;
