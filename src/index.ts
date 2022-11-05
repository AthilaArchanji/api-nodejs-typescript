import express, {Request, Response} from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req: Request, res: Response) =>{
    res.json({
        msg: 'ok'
    })
});

app.listen(PORT, () => console.log(`Servidor iniciado na porta ` + PORT));