import { Request, Response } from 'express';

export class ToDoController {
  public async find(request: Request, response: Response): Promise<Response> {
    return response.json({});
  }

  public async create(request: Request, response: Response): Promise<Response> {
    return response.json({});
  }

  public async save(request: Request, response: Response): Promise<Response> {
    return response.json({});
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    return response.json({});
  }
}
