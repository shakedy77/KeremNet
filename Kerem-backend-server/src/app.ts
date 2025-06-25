import express from 'express';
const app = express();
const port = 3060;

app.get('/', (req, res) => {
  res.send('welcome to kerem server!');
});

app.get('/:post/:')

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});