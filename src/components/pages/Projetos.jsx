import React, { useState, useEffect } from "react";
import Mensagem from "../layout/Mensagem";
import { useLocation } from "react-router-dom";
import styles from "./Projetos.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

import ProjectCard from "../projeto/ProjectCard";
import Louding from "../layout/Louding";
import { useContext } from "react";
import TemaContext from "../tema/TemaContext";

const Projetos = () => {
  const { tema } = useContext(TemaContext);
  const temaBotao = {
    backgroundColor: tema === "light" ? "#222" : "#efefef",
    color: tema === "light" ? "#efefef" : "#222",
  };
  const [projects, setProjects] = useState([]);
  const [removeLouding, setRemoveLouding] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/project", {
        method: "GET",
        header: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setProjects(data);
          setRemoveLouding(true);
        })
        .catch((error) => console.log(error));
    }, 300);
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/project/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso!");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.projeto_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/novo-projeto" text="Criar Projeto" style={temaBotao} />
      </div>
      {message && <Mensagem type="success" msg={message} />}
      {projectMessage && <Mensagem type="success" msg={projectMessage} />}

      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLouding && <Louding />}
        {removeLouding && projects.length === 0 && (
          <p>Não há projetos cadastrados</p>
        )}
      </Container>
    </div>
  );
};

export default Projetos;
