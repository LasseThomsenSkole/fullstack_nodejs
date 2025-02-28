import express from 'express';
import path from 'path';

const app = express();
app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'));
});
const PORT = 80;
app.listen(PORT);