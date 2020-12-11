import { NextFunction, Request, Response } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
}