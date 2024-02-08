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
        <a href="https://github.com/trawisDF" target="_blank">
          <img src="github.png" alt="GitHub Logo" />
        </a>
      </div>
      <div className="floating-link" id="floating-link-3">
        <a
          href="https://linkedin.com/in/tawid-khantiyoo-273146274"
          target="_blank"
        >
          <img src="linkedinicon.png" alt="LinkedIn Logo" />
        </a>
      </div>
      <div className="floating-link" id="floating-link-4">
        <a href="resume.pdf" target="_blank">
          <img src="resumeIcon.png" alt="ResumeDownload" />
        </a>
      </div>
    </>
  ); 
};

export default FloatLink;
