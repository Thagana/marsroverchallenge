// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/first */
import express from 'express';
import cors from 'cors';

import routes from './routes/routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


routes(app);

export default app;