import express, { Request, Response } from 'express';
import controller from './controllers/controller'

const app = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Rodando')
})


app.use(controller)

export default app