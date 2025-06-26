import express from 'express';
import router from './routing';

const app = express();

const port = 3060;

app.use("/", router)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});