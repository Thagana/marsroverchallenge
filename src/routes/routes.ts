import { Express, Router } from 'express';
import commands from '../controllers/controll.controller';

const router = Router();

const Routes = (app: Express) => {
    app.use('/', router.post('/commands', commands.commands));
}

export default Routes;