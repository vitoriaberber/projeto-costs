import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import { useContext } from "react";
import TemaContext from "../tema/TemaContext";

const Footer = () => {
  const { tema } = useContext(TemaContext);
  const temaFooter = {
    backgroundColor: tema === "light" ? "#000000" : "#efefef",
    color: tema === "light" ? "#efefef" : "#222",
  };
  return (
    <footer className={styles.footer} style={temaFooter}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2021
      </p>
    </footer>
  );
};

export default Footer;
