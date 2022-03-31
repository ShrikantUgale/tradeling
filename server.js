import express from "express";
import router from './routes/hello.js';
import pingRouter from './routes/ping.js';
import peopleRouter from './routes/people.js';

const app = express();

const PORT = 3000;

app.use('/hello', router);
app.use('/ping', pingRouter);
app.use('/sw', peopleRouter);


app.listen(PORT, () => console.log(`Server is running on ${PORT}`));