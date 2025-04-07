# NodeProject

## 📖 Introdução

Este projeto é uma aplicação desenvolvida em Node.js com o objetivo de demonstrar a implementação de um CRUD (Create, Read, Update, Delete). Ele serve como um exemplo prático para entender os conceitos fundamentais de desenvolvimento backend utilizando JavaScript e Node.js.

## 🧠 Teoria

CRUD é um acrônimo para as quatro operações básicas de persistência de dados:
- **Create**: Criar novos registros.
- **Read**: Ler ou recuperar registros existentes.
- **Update**: Atualizar registros existentes.
- **Delete**: Excluir registros.

Node.js é uma plataforma que permite executar JavaScript no lado do servidor. Ele é amplamente utilizado para criar APIs RESTful devido à sua alta performance e escalabilidade.

## ⚙️ Funcionalidades do CRUD

1. **Create**: Adicionar novos dados ao sistema.
2. **Read**: Consultar dados existentes.
3. **Update**: Modificar dados existentes.
4. **Delete**: Remover dados do sistema.

## 🛠️ Explicação do Código

### Tecnologias Utilizadas
- **Node.js**: Plataforma principal para o backend.
- **Express.js**: Framework para simplificar a criação de rotas e middleware.
- **MongoDB** (ou outro banco de dados): Para persistência de dados.
- **dotenv**: Para gerenciar variáveis de ambiente.
- **Postman** (ou similar): Para testar as rotas da API.

### Estrutura do Projeto
- `server.js`: Arquivo principal que inicializa o servidor.
- `routes/`: Contém as rotas da aplicação.
- `controllers/`: Contém a lógica de negócios.
- `models/`: Define os esquemas de dados.

### Por que escolhi essas tecnologias?
- **Node.js**: Por sua performance e suporte a JavaScript.
- **Express.js**: Por sua simplicidade e flexibilidade.
- **MongoDB**: Por ser um banco de dados NoSQL fácil de integrar com Node.js.

### Como o código funciona?
- O servidor é inicializado no arquivo `server.js`.
- As rotas são definidas no diretório `routes/` e conectadas ao servidor.
- A lógica de negócios é implementada nos controladores.
- Os dados são armazenados e manipulados utilizando os modelos.

## 📋 Procedimento Padrão

### Instalação de um Projeto Novo
1. Certifique-se de ter o **Node.js** instalado.
2. Crie uma nova pasta para o projeto.
3. Execute `npm init -y` para inicializar o projeto.
4. Instale as dependências necessárias:
   ```bash
   npm install express mongoose dotenv
   ```

### Clonando este Projeto Localmente
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd NodeProject
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente no arquivo `.env`.

### Executando o Projeto
1. Inicie o servidor:
   ```bash
   npm start
   ```
2. Acesse a aplicação em `http://localhost:<PORT>`.



