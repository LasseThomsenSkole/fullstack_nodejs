import express from 'express';
import pagesRouter from './routers/pagesRotuer.js'
import matchesRouter from './routers/matchesRouter.js'
import contactsRouter from "./routers/contactsRouter.js";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.use(pagesRouter);
app.use(matchesRouter);
app.use(contactsRouter)

const PORT = Number(process.env.PORT) || 8080;
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));