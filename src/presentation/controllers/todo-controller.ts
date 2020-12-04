import { HttpRequest, HttpResponse } from '../protocols/http';

export class TodoController {
    handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        let response = { statusCode: 500 };
        if (httpRequest?.body?.description &&
            httpRequest.body.description.length > 0) {
            response = { statusCode: 200 };
        }
        return Promise.resolve(response);
    }
}