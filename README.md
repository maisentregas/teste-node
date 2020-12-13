## Teste Desenvolvedor MaisEntregas

Você deve desenvolver uma API, utilizando Node, para uma aplicação de gerenciamento de TODOs.

A escolha das bibliotecas, banco de dados, arquitetura, etc, fica a seu critério.

O código precisa ser capaz de rodar em uma máquina linux.

Altere o arquivo README explicando o que é preciso para rodar sua aplicação.

## Como Rodar:

1. Download do clone deste repositório.

2. Entrar na pasta do projeto e instalar as dependências:
```

npm install
npm install knex -g
npm install jest -g
```
5. Alterar as variáveis de configuração dos arquivos connection.ts e knexfile.ts:
```
    connection: {
        host: "localhost",
        database: 'todo',
        user: 'usuário-postgres-maquina-local',
        password: 'senha',
        port: 5432
    }
    
```
6. Rodar as migrations e Seeds:
```

npm run knex:migrate
npm run knex:seed
```
7. Rodar o Projeto:
```
npm start
```
Para rodar os testes: 
```
npm test
```