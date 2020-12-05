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
- Listar todos os TODOs.
- Adicionar um novo TODO (ID, DESCRIPTION, CHECKED, CREATED_AT, UPDATED_AT, DELETED_AT).
- Alterar um TODO.
- Deletar um TODO.

**REQUISITOS NÃO FUNCIONAIS**
- As informações de um TODO devem ser armazenadas no PostgreSQL.

**REGRA DE NEGÓCIO**
- Ao adicionar um TODO o campo "text" deve ser preenchido.
- Quando um todo for atualizado, deve-se alterar o campo updated_at com a data e hora atual.
- Ao remover um TODO ele não deve ser removido do banco de dados, deve-se somente alterar o campo deleted_at com a data atual.
- Na listagem dos TODOs, devem ser mostrado somente os TODOs cuja o campo deleted_at seja nulo, ou seja, os TODOs que não foram removidos.
