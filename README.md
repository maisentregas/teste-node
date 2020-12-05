# Teste Desenvolvedor MaisEntregas

Olá caro desenvolvedor, nesse teste analisaremos seu conhecimento geral. Abaixo explicaremos tudo o que será necessário.

## Instruções

Você deve desenvolver uma API, utilizando Node, para uma aplicação de gerenciamento de TODOs.

A escolha das bibliotecas, banco de dados, arquitetura, etc, fica a seu critério.

O código precisa ser capaz de rodar em uma máquina linux.

Altere o arquivo README explicando o que é preciso para rodar sua aplicação.

## API

A API precisa ser desenvolvida em Node, e deverá ser possível:

- Listar todos os TODOs.
- Adicionar um novo TODO.
- Alterar um TODO.
- Deletar um TODO.

## Entrega

Para iniciar o teste, faça um fork deste repositório, crie uma branch com o seu nome completo e depois envie-nos o pull request. Se você apenas clonar o repositório não vai conseguir fazer push e depois vai ser mais complicado fazer o pull request.

## Nossa análise

- Organização do código, separação de módulos, legibilidade e comentários.
- Histórico de commits.

## Dúvidas?

Quaisquer dúvidas que você venha a ter, consulte as issues para ver se alguém já não a fez e caso você não ache sua resposta, abra você mesmo uma nova issue!

### Boa sorte!

## Solução - Lucas Fernandes de Oliveira

Primeiro criei um container no Docker com a imagem do MongoDB com o seguinte comando:

```sh
docker run -d --name mais-entregas -p 27887:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin mongo
````

A partir daí o container já está rodando com o nosso banco de dados, agora vamos configurar o projeto.

Um arquivo ```.env``` foi criado contendo as credenciais de administrador para acesso do BD, sendo assim todos podem testar se quiserem, basta criar o arquivo ```touch .env``` na pasta **teste-node** e dentro do arquivo colar as seguintes credenciais:

```sh
DATABASE_CONNECTION_STRING=mongodb://admin:admin@localhost:27887/?authSource=admin
````

Como este é só um teste, já deixei o arquivo ```.env``` pronto no repositório.

Depois criei a estrutura do ToDo no arquivo [todo.model.js](https://github.com/LucasFOliveira/teste-node/blob/LucasFOliveira/src/models/todo.model.js), onde eu criei uma estrutura básica pro ToDo contendo todos os atributos que achei necessário. Criei o Enum de prioridade **Priority** com os atributos *Low*, *Medium* *High* e *Urgent*, caso algum outro argumento for passado que não esteja dentro deste quarteto, o objeto não será criado. Criei também os atributos **Description** que remete a descrição da tarefa e **Responsible** que se refere ao responsável pela tarefa, as duas são do tipo *String*. **Done** um atributo *boolean* que é *True* se a tarefa tiver sido concluída e *False* se não tiver sido concluída, ao inserir um ToDo no DB, o atributo **Done** é por padrão configurado como *False*.

Quanto aos *endpoints* da API, vou explicar cada um aqui:

Para rodar o programa, basta ir na pasta ```teste-node``` e rodar o comando ```npm run dev```. Nosso backend irá rodar no endereço ```http://localhost:4040```. Todos os testes das requisições foram realizados no Postman e cada método implementado será explicado abaixo.

### POST /todo

O método adiciona um novo ToDo ao BD da seguinte forma, passando um corpo de objeto no formato JSON:

```POST http://localhost:4040/todo```

Na seção Body > raw > JSON, você cola o JSON com os dados que se deseja inser no BD.

![Postman](https://github.com/LucasFOliveira/teste-node/blob/LucasFOliveira/src/images/postman.png?raw=true)

```json
[{
    "description": "Make breakfast",
    "responsible": "Lucas",
    "priority": "Urgent"
}]
```

```json
[{
    "description": "Clean the house",
    "responsible": "Brito",
    "priority": "Medium"
}]
```

Dentro do BD, é gerado automaticamente um **_id**. É assim que nosso objeto está dento do BD.

```json
[{
    "done": false,
    "_id": "5fcc11a51adb01066edb7299",
    "description": "Make breakfast",
    "responsible": "Lucas",
    "priority": "Urgent"
}]
```

### GET /todo

O método retorna todos os ToDo's existentes no BD.

```GET http://localhost:4040/todo```

Dentro do BD, o método pega todos os ToDo's e retorna um JSON com os dados de cada um.

```json
[{
    "done": false,
    "_id": "5fcc11a51adb01066edb7299",
    "description": "Make breakfast",
    "responsible": "Lucas",
    "priority": "Urgent"
},{
    "done": false,
    "_id": "5fcc12601adb01066edb729a",
    "description": "Clean the house",
    "responsible": "Brito",
    "priority": "Medium"
}]
```

### GET /todo/id

Recupera um ToDo do BD, passando o ID do objeto desejado como parâmetro.

```GET http://localhost:4040/todo/5fcc11a51adb01066edb7299```

```json
[{
    "done": false,
    "_id": "5fcc11a51adb01066edb7299",
    "description": "Make breakfast",
    "responsible": "Lucas",
    "priority": "Urgent"
}]
```

### PUT /todo/id

Esse método atualiza o atributo **Done**, ao fazer a requisição abaixo passando o ID do ToDo como parâmetro, o status da tarefa que é *False* é atualizado para *True*. Caso tenha errado o ToDo que queria marcar como concluído, é só fazer a mesma requisição que o status da tarefa vai de *True* para *False* novamente.

```PUT http://localhost:4040/todo/5fcc11a51adb01066edb7299```

### DELETE /todo/id

Esse método serve para deletar um ToDo do BD, passando o ID do objeto que se quer excluir como parâmetro.

```DELETE http://localhost:4040/todo/5fcc11a51adb01066edb7299```

### DELETE /todo

Esse método serve para deletar todos os ToDo do BD, fazendo a seguinte requisição:

```DELETE http://localhost:4040/todo```

Obrigado pela opurtunidade que foi me dada de fazer este desafio, foi uma solução simples, passível de várias melhorias, mas espero que gostem e que atenda as expectativas de vocês, obrigado pela oportunidade, um abraço à todos, fiquem seguros e isolados, e usem máscara rsrs.