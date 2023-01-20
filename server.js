import * as dotenv from 'dotenv';
import express from 'express';
import apiRoutes from './routes/api.js';
import webRoutes from './routes/web.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();
export const app = express();
app.use(express.json());

const port = process.env.PORT || 8001;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', webRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(
    ` Server run on  ${process.env.APP_HOST}:${process.env.APP_PORT}`
  );
});
