import { HttpMethod, HttpRequest, HttpResponse } from '../protocols/http';
import { Todo } from '../../domain/usecases/todo';

export class TodoController {
    private readonly todo: Todo;
    constructor(todo: Todo) {
        this.todo = todo;
    }

    async handle(httpMethod: HttpMethod, httpRequest: HttpRequest): Promise<HttpResponse> {
        let result;
        let response: HttpResponse = { statusCode: 500 };

        try {
            const { id, description } = httpRequest.body;
            if (httpMethod === 'POST') {
                result = await this.todo.add({ description });
            } else if (httpMethod === 'DELETE') {
                result = await this.todo.delete({ id });
            } else if (httpMethod === 'PUT') {
                result = await this.todo.update({ id, description });
            } else if (httpMethod === 'GET') {
                result = await this.todo.list();
            } else {
                throw new Error('Metodo inválido!');
            }
            
            response.statusCode = 200;
            response.body = result;
        } catch (err) {
            response.body = err.toString();
        }

        return Promise.resolve(response);
    }
}