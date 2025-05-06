import React from "react";
import styles from "./SubmitButton.module.css";

const SubmitButton = ({ text, style }) => {
  return (
    <div>
     <button className={styles.btn} style={style}>{text}</button>
    </div>
  );
};

export default SubmitButton;
