import { HttpRequest, HttpResponse } from '../protocols/http';

export class TodoController {
    handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        let response = { statusCode: 500 };
        return Promise.resolve(response);
    }
}