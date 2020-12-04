export interface HttpRequest {
    body: any;
}

export interface HttpResponse {
    statusCode: number;
}

export type HttpMethod = "POST" | "PUT" | "GET" | "DELETE"