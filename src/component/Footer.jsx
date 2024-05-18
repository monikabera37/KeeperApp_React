import React from "react";

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer>
      <p> {currentYear}</p>
    </footer>
  );
};

export default Footer;
