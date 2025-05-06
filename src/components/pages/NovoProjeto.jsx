import React from 'react';
import styles from './NovoProjeto.module.css'
import ProjetoFormulario from '../projeto/ProjetoFormulario';
import {useNavigate} from 'react-router-dom'

const NovoProjeto = () => {

  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/project', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project)
    }).then(
      (resp => resp.json())
    ).then((data) => {
      console.log(data)
      navigate('/projetos', { state: { message: 'Projeto criado com sucesso!' }} )
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className={styles.novoprojeto_container}>
      <h1>Crie seu projeto</h1>
      <p>Crie seu projeto  para depois adicionar os serviços</p>
      <ProjetoFormulario handleSubmit={createPost} btnText='Criar Projeto'/>
    </div>
  )
}

export default NovoProjeto
