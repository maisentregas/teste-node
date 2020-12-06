export interface TodoModel {
    id: number;
    description: string;
    created_at: number;
}

export interface AddTodoModel {
    description: string;
}

export interface UpdateTodoModel {
    id: number;
    description: string;
}

export interface DeleteTodoModel {
    id: number;
}