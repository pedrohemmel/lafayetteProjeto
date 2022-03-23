import express, {Request, Response} from 'express';
import mustache from 'mustache-express';
import path from 'path'
import mainRoutes from './routes/index';

//Configurando rotas e metodos de desenvolvimento
const server = express();
let favicon = require('serve-favicon');
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname,'../public')))
server.use(favicon(path.join(__dirname, '../public/img', 'favicon.ico')));
server.use(mainRoutes)

server.use((req:Request,res:Response)=>{
    res.status(404).send("Página não encontrada")
})

server.listen(80);