import React from "react";
import { useState } from "react";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import styles from "./Contato.module.css";
import { useContext } from "react";
import TemaContext from "../tema/TemaContext";

const Contato = () => {
  const { tema } = useContext(TemaContext);
  const temaBotao = {
    backgroundColor: tema === "light" ? "#222" : "#efefef",
    color: tema === "light" ? "#efefef" : "#222",
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
    console.log(`Olá ${name}`);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    console.log(`Olá ${email}`);
  }

  function handleChangeAssunto(e) {
    setAssunto(e.target.value);
    console.log(`Olá ${assunto}`);
  }

  function handleChangeMensagem(e) {
    setMensagem(e.target.value);
    console.log(`Olá ${mensagem}`);
  }

  function enviar(e) {
    e.preventDefault()
    if(name.trim() == '' || email.trim() == '' || assunto.trim() == '' || mensagem.trim() == ''){
      alert('Insira dados válidos')
      return
    }

    alert('Mensagem enviada!')
  }
  return (
    <form action="" onSubmit={enviar} className={styles.contato_formulario}>
      <Input
        type="text"
        name="nome"
        placeholder="Escreva seu nome"
        handleOnChange={handleChangeName}
        value={name}
        text="Nome:"
      />

      <Input
        type="email"
        name="email"
        placeholder="Escreva seu email"
        handleOnChange={handleChangeEmail}
        value={email}
        text="Email:"
      />

      <Input
        type="text"
        name="assunto"
        placeholder="Escreva sobre o assunto"
        handleOnChange={handleChangeAssunto}
        value={assunto}
        text="Assunto:"
      />

      <label htmlFor="mensagem">Mensagem:</label>
      <textarea
        placeholder="Escreva sua mensagem"
        onChange={handleChangeMensagem}
        id="mensagem"
        cols="30" rows="5"
      ></textarea>

      <SubmitButton text="Enviar"style={temaBotao} />
    </form>
  );
};

export default Contato;
