# Instruções para rodar o projeto
- Com o docker instalado na sua maquina rode o comando "docker run --name NOME_DO_BANCO -e MYSQL_ROOT_PASSWORD=SENHA_DO_BANCO -p 3306:3306 -d mysql:8.0.21".
- Com isso o docker vai subir um container com a imagem do mysql e redirecionar a porta 3306 da maquina para a porta 3306 do container.
- Após clonar o projeto com o git, entre na pasta e rode npm install, para instalar todas as dependências do projeto.
- Altere no arquivo ".env" DB_NAME=NOME_DO_BANCO e DB_PASSWORD=SENHA_DO_BANCO usado no primeiro comando, o DB_USERNAME e os outros não precisam ser alterados, pois o mysql cria o usuário como root automaticamente.
- Rode npx sequelize db:create para que o banco seja criado pelo sequelize-cli.
- Rode npx sequelize db:migrate para que todas as definições na pasta src/app/database/migrations/ seja feita automaticamente no banco de dados pelo sequelize-cli.
- Agora você ja pode rodar o npm start para que o express suba o servidor e escute as chamadas na porta 3000 da nossa aplicação.

- /task/create > Envie um objeto por post contendo { "task": string } Para criar uma nova tarefa.
- /task/update > Envie um objeto por put contendo { "id": number, "task": opcional:string, "done": opcional:boolean } Para atualizar uma tarefa caso ela exista.
- /task/delete > Envie um objeto por post contendo { "id": obrigatorio:number } Para deletar uma tarefa caso ela exista.
- /task/all    > Faça um get para retornar todas tarefas.
- /task/all?done=1 ou 0 > Faça um get com query params para retornar tarefas feitas ou pendentes(1 para feita e 0 para pendente).