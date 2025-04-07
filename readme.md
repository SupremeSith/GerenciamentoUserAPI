# Cadastro de Usuários 📋

![Banner do Projeto](https://via.placeholder.com/1200x300.png?text=Cadastro+de+Usu%C3%A1rios)

**Cadastro de Usuários** é um sistema web completo para gerenciamento de usuários, projetado para ser simples, eficiente e escalável. Ele combina um **frontend** moderno em React com um **backend** robusto em Node.js, utilizando Prisma para interação com o banco de dados. O projeto permite cadastrar, visualizar, excluir e exportar dados de usuários, com uma interface amigável e um design profissional.

O sistema conta com uma sidebar expansível para navegação, um formulário de cadastro, uma tabela interativa para visualização de dados, e funcionalidades como exclusão em massa e exportação para CSV. O design utiliza a fonte Poppins e uma paleta de cores em tons de cinza e branco, garantindo uma experiência visual limpa e agradável.

## Badges 🏆

![GitHub repo size](https://img.shields.io/github/repo-size/woofportocarrero/CADASTRO-USUARIO)
![GitHub last commit](https://img.shields.io/github/last-commit/woofportocarrero/CADASTRO-USUARIO)
![License](https://img.shields.io/github/license/woofportocarrero/CADASTRO-USUARIO)
![Node.js](https://img.shields.io/badge/Node.js-v16+-green)
![React](https://img.shields.io/badge/React-v18-blue)
![Prisma](https://img.shields.io/badge/Prisma-v5-blue)

## Menu 📑

- [Sobre o Projeto](#sobre-o-projeto-ℹ️)
- [Funcionalidades](#funcionalidades-🚀)
- [Demonstração](#demonstração-📷)
- [Tecnologias Utilizadas](#tecnologias-utilizadas-🛠️)
- [Estrutura do Projeto](#estrutura-do-projeto-📂)
- [Instalação](#instalação-📦)
- [Uso](#uso-📡)
- [Endpoints da API](#endpoints-da-api-🖥️)
- [Estrutura do Banco de Dados](#estrutura-do-banco-de-dados-prisma-🧩)
- [Estilização e Design](#estilização-e-design-🎨)
- [Testes](#testes-🧪)
- [Contribuindo](#contribuindo-🤝)
- [Reportando Bugs](#reportando-bugs-🐛)
- [Licença](#licença-📜)
- [Contato](#contato-📞)

## Sobre o Projeto ℹ️

O **Cadastro de Usuários** é um projeto full-stack desenvolvido para gerenciar informações de usuários de forma eficiente. Ele foi criado com o objetivo de oferecer uma solução prática para operações CRUD (Create, Read, Update, Delete), com foco em usabilidade e design. O sistema é ideal para aplicações que precisam de um gerenciamento básico de usuários, como sistemas internos, CRMs ou ferramentas administrativas.

O projeto é dividido em duas partes principais:
- **Frontend**: Uma interface React com duas páginas principais: uma para cadastro de usuários e outra para visualização em tabela.
- **Backend**: Uma API RESTful em Node.js com Express, que utiliza Prisma para interagir com o banco de dados.

## Funcionalidades 🚀

### Geral
- **🌐 Navegação Intuitiva**: Sidebar expansível com ícones para alternar entre as páginas de cadastro e tabela.
- **📱 Design Responsivo**: Interface adaptada para diferentes tamanhos de tela.
- **💾 Exportação de Dados**: Exporta os dados da tabela para um arquivo CSV, ideal para relatórios empresariais.

### Frontend
- **📝 Cadastro de Usuários**: Formulário para adicionar novos usuários com campos para nome, email e idade.
- **📊 Visualização em Tabela**: Tabela interativa com colunas para ID, Nome, Email, Idade e Ações.
- **🗑️ Exclusão de Usuários**:
  - Exclusão individual com confirmação via modal.
  - Exclusão em massa selecionando múltiplos usuários.
- **🔗 Integração com API**: Consumo da API para exibir e manipular dados.
- **🔔 Feedback ao Usuário**: Modal de confirmação para exclusão e botões desabilitados quando necessário.

### Backend
- **🌐 API RESTful**: Endpoints para criar, listar, atualizar e deletar usuários.
- **✅ Validação de Dados**: Recebe e valida dados enviados pelo frontend.
- **🗄️ Banco de Dados**: Integração com Prisma para operações no banco.

## Demonstração 📷

### Tela de Cadastro
![Tela de Cadastro](https://via.placeholder.com/800x400.png?text=Tela+de+Cadastro)  
_Formulário para adicionar novos usuários com uma sidebar à esquerda._

### Tabela de Usuários
![Tabela de Usuários](https://via.placeholder.com/800x400.png?text=Tabela+de+Usu%C3%A1rios)  
_Tabela com opções de exclusão e exportação, e navegação via sidebar._

> **Nota**: Substitua as imagens acima por capturas de tela reais do seu projeto para uma melhor apresentação.

## Tecnologias Utilizadas 🛠️

### Frontend
- **React** v18: Biblioteca JavaScript para construção de interfaces.
- **React Router** v6: Gerenciamento de rotas para navegação entre páginas.
- **Axios**: Cliente HTTP para comunicação com a API.
- **CSS**: Estilização personalizada com a fonte Poppins e tema em tons de cinza/branco.

### Backend
- **Node.js** v16+: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework para criação de APIs RESTful.
- **Prisma** v5: ORM para interação com o banco de dados.
- **CORS**: Middleware para permitir requisições entre origens diferentes.

### Ferramentas e Dependências
- **Vite**: Ferramenta de build para o frontend, garantindo um desenvolvimento rápido.
- **ESLint**: Para linting e manutenção da qualidade do código.
- **Git**: Controle de versão.

## Estrutura do Projeto 📂

```plaintext
/CADASTRO-USUARIO
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── trash-red-icon.svg        # Ícone SVG para o botão de exclusão
│   ├── pages/
│   │   ├── home/
│   │   │   ├── index.jsx             # Componente da página de cadastro
│   │   │   └── style.css             # Estilos específicos para a página de cadastro
│   │   └── table/
│   │       ├── index.jsx             # Componente da página de tabela
│   │       └── style.css             # Estilos específicos para a página de tabela
│   ├── services/
│   │   └── api.js                    # Configuração do Axios para comunicação com a API
│   ├── index.css                     # Estilos globais
│   └── main.jsx                      # Ponto de entrada do React com configuração de rotas
├── server.js                         # Arquivo principal do backend (Node.js/Express)
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
