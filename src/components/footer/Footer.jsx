import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>

        <div className="socialIcons">
          <Link
            to="https://www.facebook.com/profile.php?id=100005312359351"
            target="_blank"
          >
            <span className="icon">
              <FaFacebookF />
            </span>
          </Link>
          <Link
            to="https://www.instagram.com/adarshkushwaha26/"
            target="_blank"
          >
            <span className="icon">
              <FaInstagram />
            </span>
          </Link>
          <Link to="https://twitter.com/Adarshk321" target="_blank">
            <span className="icon">
              <FaTwitter />
            </span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/adarsh-kushwaha-616b2b272/"
            target="_blank"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </Link>
        </div>
      </ContentWrapper>
      <div className="copyRight">
        copyright &copy; 2023 by Adarsh kushwaha | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
