import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>TravisDF &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
