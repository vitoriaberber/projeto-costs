import React, { useState } from "react";
import styles from "../projeto/ProjetoFormulario.module.css";
import SubmitButton from "../form/SubmitButton";
import Input from "../form/input";
import { useContext } from "react";
import TemaContext from "../tema/TemaContext";

const ServiceForm = ({ handleSubmit, btnText, projectData }) => {
  const { tema } = useContext(TemaContext);
  const temaBotao = {
    backgroundColor: tema === "light" ? "#222" : "#efefef",
    color: tema === "light" ? "#efefef" : "#222",
  };
  const [service, setService] = useState([]);

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData)
  }
  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }
  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />

      <Input
        type="Number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
      />

      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Escreva o serviço"
        handleOnChange={handleChange}
      />

      <SubmitButton text={btnText} style={temaBotao}/>
    </form>
  );
};

export default ServiceForm;
