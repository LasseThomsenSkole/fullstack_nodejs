import express from "express";
import gamesRoutes from "./router/gamesRouter.js";
const app = express();
app.use(express.json());
app.use(gamesRoutes);

app.listen(80);