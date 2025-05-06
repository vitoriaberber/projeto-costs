import React, { useState, useEffect } from "react";
import styles from "./Mensagem.module.css";

const Mensagem = ({ type, msg }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(!msg){
        setVisible(false)
        return
    }

    setVisible(true)
    const timer = setInterval(() => {
        setVisible(false);
    }, 3000)

    return () => {
        clearTimeout(timer)
    }

  }, [msg])

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
};

export default Mensagem;
