import React from 'react'
import savings from '../../img/savings.svg'
import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
import { useContext } from "react";
import TemaContext from "../tema/TemaContext";


const Home = () => {
  const { tema } = useContext(TemaContext); 
  const temaBotao = {
    backgroundColor: tema === 'light' ? '#222' : '#efefef',
    color: tema === 'light' ? '#efefef' : '#222',
  };
  return (
    <section className={styles.home_container}>
      <h1>
        Bem vindo ao <span>Costs</span>
      </h1>

      <p>Comece a gerenciar seus projetos hoje mesmo!</p>
      <LinkButton to='/novo-projeto' text='Criar Projeto' style={temaBotao}/>
      <img src={savings} alt="Costs" />
    </section>
  )
}

export default Home
