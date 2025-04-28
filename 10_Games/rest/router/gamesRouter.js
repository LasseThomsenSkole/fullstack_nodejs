import {Router} from 'express';
import db from '../../database/connection.js';
const router = Router();
//https://svelte.dev/playground/c81d8f3dff584065a82b2d3ea7cd4aee?version=5.28.2
router.get('/api/games', async (req, res) => {
    const result = await db.all('SELECT * FROM games');
    console.log(result);
    res.send({"data": result});
})
router.post('/api/games', async (req, res) => {
    const {title, genre, runtimeId} = req.body;
    if (!title || !genre || !runtimeId) {
        return res.status(400).send({"error": "Missing required fields"});
    }
    try{
        const result = await db.run('INSERT INTO games (title, genre, runtime_environment_id) VALUES (?, ?, ?)', [title, genre, runtimeId]);
        return res.status(200).send({"data": result.lastID});
    }catch(err){
        console.error(err);
        return res.status(500).send({"error": "Internal server error"});
    }
})
export default router;