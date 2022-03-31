import express  from "express";
import getPeople from '../service/getpeople.js'

const router = express.Router();

router.get('/people', async (req, res) => {

    let resMsg = await getPeople();
    res.send(resMsg);
})

export default router;
