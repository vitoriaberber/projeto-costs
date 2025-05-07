import React from "react";
import styles from "./Projeto.module.css";
import { v4 as uuidv4 } from "uuid";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Louding from "../layout/Louding";
import Container from "../layout/Container";
import ProjetoFormulario from "../projeto/ProjetoFormulario";
import Mensagem from "../layout/Mensagem";
import ServiceForm from "../service/ServiceForm";
import ServiceCard from "../service/ServiceCard";

import { useContext } from "react";
import TemaContext from "../tema/TemaContext";

const Projeto = () => {
  const { tema } = useContext(TemaContext);
  const temaBotao = {
    backgroundColor: tema === "light" ? "#222" : "#efefef",
    color: tema === "light" ? "#efefef" : "#222",
  };
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/project/${id}`, {
        method: "GET",
        header: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          const orcamentoRestante = calcularOrcamentoRestante(data.budget, data.cost);
          setProject({ ...data, orcamentoRestante });
          setServices(data.services);
        })
        .catch((error) => console.log(error));
    }, 300);
  }, [id]);

  function editPost(project) {
    setMessage("");
    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/project/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage("Projeto Atualizado!");
        setType("success");
      })
      .catch((error) => console.log(error));
  }

  function createService(project) {
    setMessage("");
    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      setType("error");
      project.services.pop();
      return false;
    }

    project.cost = newCost;

    fetch(`http://localhost:5000/project/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setServices(data.services);
        setShowServiceForm(false);
      })
      .catch((error) => console.log(error));
  }

  function calcularOrcamentoRestante(budget, cost) {
    return budget - cost;
  }
  
  useEffect(() => {
    const novoOrcamento = calcularOrcamentoRestante(project.budget, project.cost);
  
    setProject((prevProject) => {
      if (prevProject.orcamentoRestante !== novoOrcamento) {
        return {
          ...prevProject,
          orcamentoRestante: novoOrcamento,
        };
      }
      return prevProject; 
    });
  }, [project.budget, project.cost]);
  
  

  function removeService(id, cost) {
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id
    );

    const projectUpdated = project;

    projectUpdated.services = servicesUpdated;

    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`http://localhost:5000/project/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) =>
        resp.json().then(() => {
          setProject(projectUpdated);
          setServices(servicesUpdated);
          setMessage("Serviço removido com sucesso!");
        })
      )
      .catch((error) => console.log(error));
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  return (
    <div className="container">
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Mensagem type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm} style={temaBotao}>
                {!showProjectForm ? "Editar Projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento: </span> R${project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado: </span> R${project.cost}
                  </p>
                  <p>
                    <span>Orçamento restante: </span> R${project.orcamentoRestante}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjetoFormulario
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Adicione um serviço:</h2>
              <button className={styles.btn} onClick={toggleServiceForm} style={temaBotao}>
                {!showServiceForm ? "Adicionar Serviço" : "Fechar"}
              </button>
              <div className={styles.project_info}>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar Serviço"
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p>Não há serviços cadastrados</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <Louding />
      )}
    </div>
  );
};

export default Projeto;
