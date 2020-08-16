import express from 'express'
import * as bodyParser from 'body-parser'
import {Server} from "typescript-rest";

import './controllers';

export const app: express.Application = express();
app.use(bodyParser.json());

Server.buildServices(app);

app.listen(3000, function() {
  console.log('Rest Api Server listening on port 3000!');
});