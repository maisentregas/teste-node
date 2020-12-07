# BANCO DE DADOS

### PARA SUBIR O BANCO DE DADOS:
```
docker container run --name mais_entregas -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=todo -p 5432:5432 -d postgres
```
### ACESSAR O BANCO E EXECUTAR O COMANDO:
```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

# TO-DO

**REQUISITOS FUNCIONAIS**
- Listar todos os ToDos.
- Adicionar um novo ToDo (id, description, checked, created_at, updated_at, deleted_at).
- Alterar um ToDo.
- Deletar um ToDo.

**REQUISITOS NÃO FUNCIONAIS**
- As informações de um TODO devem ser armazenadas no PostgreSQL.

**REGRA DE NEGÓCIO**
- Na listagem dos ToDos, devem ser mostrado somente os ToDos cuja o campo deleted_at seja nulo, ou seja, os ToDos que não foram removidos.
- Ao adicionar um ToDo o campo "description" deve ser preenchido.
- Antes de atualizar um ToDo, verificar se o ToDo a ser atualizado existe.
- Antes de atualizar um TODO, o campo description deve ser validado.
- Quando um ToDo for atualizado, deve-se alterar o campo updated_at com a data e hora atual.
- Ao remover um ToDo ele não deve ser removido do banco de dados, deve-se somente alterar o campo deleted_at com a data atual.
- Ao remover um ToDo, deve-se verificar se o id informado é um UUID válido.
- Se o uuid for válido, deve-ve se verificar se o TODO a ser removido existe na base de dados.
