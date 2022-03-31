import express from "express";
import router from './routes/hello.js';

const app = express();

const PORT = 3000;

// app.get('/', (req, res) => {

//     res.status(200).json({"message": "Hello World"});
// })

app.use('/hello', router);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));