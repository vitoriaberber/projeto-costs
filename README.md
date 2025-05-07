# 📊 Projeto: **Costs**

Um sistema de gerenciamento de projetos e orçamentos, desenvolvido com React e Vite. A aplicação permite criar, editar e excluir projetos, bem como adicionar serviços dentro de um orçamento controlado. Também conta com troca de tema (modo claro/escuro) usando o Context API.

---

## 🚀 Tecnologias utilizadas

- React
- Vite
- CSS Modules
- Context API
- json-server (para API fake em ambiente local)
---

## ⚙️ Funcionalidades

- ✅ Adicionar novos projetos com nome, categoria e orçamento
- ✅ Editar informações de um projeto já existente
- ✅ Excluir projetos
- ✅ Adicionar serviços aos projetos
- ✅ Validação de orçamento: não permite adicionar serviços que ultrapassem o valor definido
- ✅ Alternância entre tema claro e escuro com Context API
- ✅ Reutilização eficiente de componentes com props dinâmicas

---

## 🖥️ Como rodar o projeto localmente

1. **Clone o repositório:**
   git clone https://github.com/vitoriaberber/projeto-costs.git

   - Instale as dependências:
   npm install
   
   - Rode o projeto:
   npm run dev
   - Inicie a API fake com json-server:
   json-server --watch db.json --port 5000

<br>
🌐 Deploy
O projeto está publicado na Vercel:
🔗 Acesse aqui: https://projeto-costs-eta.vercel.app/

Nota: a API fake (json-server) funciona apenas localmente. Para produção, é necessário conectar com uma API real ou hospedada externamente.


