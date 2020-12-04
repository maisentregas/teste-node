CHECKLIST API

Back end rest feito usando node.js, express e sequelize

REQUISITOS

- Node.Js 10.10.0 ou superior

- Mysql / MariaDB 

- NPM  6.4.1 ou superior

- yarn 1.22.4 ou superior

  



INSTALAÇÃO

​	Baixar o código fonte em seguida entre na pasta e rode os comandos

```shell
npm i
```

Configura o arquivo **config/connDB.js**

```javascript
module.exports = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'todo',
    define: {
        timestamps: true,
        underscored: true
    },
};
```

Configure o mesmo de a cordo com suas credenciais de banco de dados

Crie o banco de dados

```shell
yarn sequelize db:create 
```

Execute as migrations

```shell
yarn sequelize db:migrate
```

e por fim coloque a api para rodar

```shell
node /app/server.js
```



Desenvolvi junto um app para visualizar as tarefas

O mesmo pode ser conferido no seguinte repositorio 

https://github.com/sousaakira/entrega-app

ou acessado pela url

https://entrega-ap.netlify.app

recomendo acessar em um celular para melhor expêriencia

