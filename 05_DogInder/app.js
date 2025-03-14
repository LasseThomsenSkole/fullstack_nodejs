import express from 'express';

const app = express();

app.use(express.static("public"));
import pagesRouter from './routers/pagesRotuer.js'
import matchesRouter from './routers/matchesRouter.js'

app.use(pagesRouter);
app.use(matchesRouter);

const PORT = Number(process.env.PORT) || 8080;
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));