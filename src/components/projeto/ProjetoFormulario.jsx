import { useState, useEffect } from "react";

import React from "react";
import styles from "./ProjetoFormulario.module.css";
import Input from "../form/input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import { useContext } from "react";
import TemaContext from "../tema/TemaContext";

const ProjetoFormulario = ({ handleSubmit, btnText, projectData }) => {
  const { tema } = useContext(TemaContext);
  const temaBotao = {
    backgroundColor: tema === "light" ? "#222" : "#efefef",
    color: tema === "light" ? "#efefef" : "#222",
  };
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />

      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />

      <SubmitButton text={btnText} style={temaBotao}/>
    </form>
  );
};

export default ProjetoFormulario;
