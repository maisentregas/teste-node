# ✅️ Todo App

<p align="center"><img  alt="Mais Entregas" src="https://avatars1.githubusercontent.com/u/57957603?s=200&v=4" /></p>

Aplicação desenvolvida como etapa para processo seletivo da empresa [Mais Entregas](https://github.com/maisentregas).

<p align="center">
	<a href="https://www.linkedin.com/in/ribeiro-edgar/" target="_blank" rel="noopener noreferrer"><img alt="Made by" src="https://img.shields.io/badge/made%20by-Edgar%20Ribeiro-%23FF2800"></a>
</p>

---
## Requisitos para Executar a Aplicação

* Node.
* NPM.
* Git.
* Postgres SQL (Pode ser Instalado no Sistema Operacional ou Utilizando o Docker).

## Rodando a aplicação

Parametrização do Banco de dados a ser utilizado, deverar ser editado no arquivo `ormconfig.json`.

Clone o Repositório

`git clone https://github.com/eneto774/teste-node.git`

Acesse a pasta do projeto

`cd teste-node`

Baixando Dependencias

`npm install`

Rodando o projeto

`npm start`

---
## Exemplos de Requisição

`
GET http://localhost:3333/todo HTTP/1.1

GET http://localhost:3333/todo/:id HTTP/1.1

POST http://localhost:3333/todo HTTP/1.1
content-type: application/json

{
	"title": "Lavar o Carro",
	"content": "Lembrar de Aspirar"
}

PUT http://localhost:3333/todo HTTP/1.1
content-type: application/json

{
	"id": "222e1dda-3279-40f1-9a8b-dc3a298fdffe",
	"title": "Lavar o Carro",
	"content": "Lembrar de Aspirar e Polir",
	"finished": true
}

DELETE http://localhost:3333/todo/:id HTTP/1.1
`




---


Made with ❤ &nbsp;by Edgar Ribeiro 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/ribeiro-edgar/)
