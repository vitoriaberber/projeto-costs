import React from 'react'
import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'

const LinkButton = ({to, text, style}) => {
  return (
    <Link to={to} className={styles.btn} style={style}>
        {text}
    </Link>
  )
}

export default LinkButton
