import express from "express";
import bodyParser from "body-parser";
import { ConfigController } from './controllers/ConfigController';
const pino  = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded( { extended: false } ) );
app.use(pino);

app.get('/', (_, res) => res.redirect('/api/greeting'));

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'world';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify( {greeting: `Hello ${name}!`} ) );
});

let configController = new ConfigController();

app.get('/api/game/list', (req, res) => configController.listGames(req, res));

app.listen(3001, () =>
    // tslint:disable-next-line:no-console
    console.log('Express server is running on port 3001')
);
