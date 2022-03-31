import express  from "express";

const router = express.Router();

router.get('/', (req, res) => {

    res.send('Hello World');
})


router.post('/', (req, res) => {

    res.status(200).json({'msg': 'Hello World'});
})

export default router;