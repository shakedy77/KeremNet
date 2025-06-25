import express from 'express';
import router from './routing';

const app = express();

const port = 3060;

app.use("/", router)
// const postsData = jsondb.posts

// app.get('/', (req, res) => {
//   res.send('welcome to kerem server!');
// });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});