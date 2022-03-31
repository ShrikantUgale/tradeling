import express  from "express";

const router = express.Router();

router.get('/people', (req, res) => {
    res.send({'msg' : 'Hello'});
})

export default router;
