import { Router } from 'express';
// den skal init
const router = Router();

import {frontpagePage, matchesPage} from "../util/pages.js";

router.get("/", (req, res) => {
    res.send(frontpagePage);
});

router.get("/matches", (req, res) => {
    res.send(matchesPage);
});

export default router;