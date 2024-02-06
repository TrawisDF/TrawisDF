import React from "react";
import { Link } from "react-router-dom";
const FloatLink = () => {
  return (
    <>
      <div className="floating-link" id="floating-link-1">
        <Link to="/contacts">
          <img src="emailIcon.png" alt="GitHub Logo" />
        </Link>
      </div>
      <div className="floating-link" id="floating-link-2">
        <a href="https://www.github.com" target="_blank">
          <img src="github.png" alt="GitHub Logo" />
        </a>
      </div>
      <div className="floating-link" id="floating-link-3">
        <a href="https://www.linkedin.com" target="_blank">
          <img src="linkedinicon.png" alt="LinkedIn Logo" />
        </a>
      </div>
    </>
  );
};

export default FloatLink;
