import React from 'react'
import styles from "./Louding.module.css"
import loading from "../../img/loading.svg"

const Louding = () => {
  return (
    <div className={styles.loader_container}>
        <img className={styles.loader} src={loading} alt="Loading" />
    </div>
  )
}

export default Louding
