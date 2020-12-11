Para Rodar a API siga as essas instruções abaixo

#Preparação da Máquina
Necessário Banco de dados MySQL (Pode estar em outra máquina) e Yarn instalados

1. Instale as depedencias rodando o comando "yarn install"
2. Configure o arquivo .env para as credenciais do banco
3. Crie o banco rodando o comando "yarn sequelize db:create"
4. Rode as migrations com o comando "yarn sequelize db:migrate"
5. Inicie o servidor com o comando "yarn run prod"

As rotas do serviços estão no arquivo src/app/routes.js
