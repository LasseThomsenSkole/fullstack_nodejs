import {Router} from "express";
const router = Router();
const employees = ["Kenneth", "Homer"];
router.get('/employees', (req, res) => {
    res.send({data: employees});
});
router.post("/employees", (req, res) => {
    res.send({data: employees});
})

export default router;