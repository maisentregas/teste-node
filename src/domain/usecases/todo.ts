interface AddTodoModel {
    description: string;
}

interface UpdateTodoModel {
    id: number;
    description: string;
}

interface DeleteTodoModel {
    id: number;
}

interface Todo {
    add(addTodoModel: AddTodoModel): Promise<TodoModel>;
    update(updateTodoModel: UpdateTodoModel): Promise<TodoModel>;
    delete(deleteTodoModel: DeleteTodoModel): Promise<Boolean>;
}