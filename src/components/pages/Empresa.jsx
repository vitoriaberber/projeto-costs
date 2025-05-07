import React from "react";
import styles from './Empresa.module.css'

const Empresa = () => {
  let membros = [
      {
        nome: 'Maria',
        cargo: 'Analista de Sistemas'
      },
      {
        nome: 'João',
        cargo: 'Desenvolvedor de Sistemas'
      },
      {
        nome: 'José',
        cargo: 'CEO'
      },
      {
        nome: 'Rose',
        cargo: 'Designer Gráfico'
      }
  ]
  return (
    <section className={styles.empresa_container}>
      <section className={styles.container_sobre}>
        <h1>Empresa</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas quod
          accusamus ut asperiores facilis fugit, velit libero veniam suscipit
          omnis dolores corporis quis assumenda inventore hic voluptates commodi
          vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          in modi blanditiis, tempora eos molestias. At aliquam quia obcaecati
          dolor beatae velit, doloremque eligendi dolore corrupti delectus,
          rerum ea reprehenderit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nobis, sequi? Molestias eos laborum rerum dolore,
          possimus autem ea provident minima dolores distinctio porro,
          repellendus doloremque labore praesentium quasi quam nulla.
        </p>
      </section>

      <section>
        <h2>Membros da equipe</h2>
        <div className={styles.container_membro}>
        {membros.map((membro) => (
          <div key={membro.nome}>
            <p>Nome: {membro.nome}</p>
            <p>Cargo: {membro.cargo}</p>
          </div>
        ))}
        </div>
      </section>

      <section className={styles.contato}>
        <p>Telefone: (11)11111-1111</p>
        <p>E-mail: emailEmpresa@gmail.com</p>
        <address>
          Rua Amazonas, 127 <br />
          Bairro Mauá <br />
          São Paulo
        </address>
      </section>

    </section>
  );
};

export default Empresa;
