import express, { Request, Response } from 'express';
import routes from './routes'

const app = express()
app.use(express.json())

app.get('/teste', (req: Request, res: Response) => {
    res.send('Rodando')
})


app.use(routes)

export default app