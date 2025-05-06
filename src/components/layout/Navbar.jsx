import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../../img/costs_logo.png"
import Container from "./Container"
import styles from "./Navbar.module.css"
import { useContext } from "react";
import TemaContext from "../tema/TemaContext";

const Navbar = () => {
  const { tema } = useContext(TemaContext);
  const temaNavBar = {
    backgroundColor: tema === 'light' ? '#000000' : '#efefef',
    color: tema === 'light' ? '#efefef' : '#222',
  };
  const linkStyle = { color: temaNavBar.color };
  return (
    <nav className={styles.navbar} style={temaNavBar}>
      <Container>
        <Link to="/">
            <img src={logo} alt="costs" />
        </Link>

        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/" style={linkStyle} >Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/projetos" style={linkStyle}>Projetos</Link>
            </li>
            <li className={styles.item}>
                <Link to="/empresa" style={linkStyle}>Empresa</Link>
            </li>
            <li className={styles.item}>
                <Link to="/contato" style={linkStyle}>Contato</Link>
            </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
