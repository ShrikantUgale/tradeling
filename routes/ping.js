import express  from "express";

const router = express.Router();

router.get('/', (req, res) => {

    const { msg } = req.query;

    res.send({'msg' : `${msg}`, 'stamp': new Date()});
})

export default router;