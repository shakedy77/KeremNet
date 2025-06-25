import express from 'express';

import jsondb from '../../DBs/db.json'
const router = express.Router();

router.get("/", (req, res) => {
  res.send('welcome to kerem server!');
});

router.get("/post", (req, res) => {
  res.send(jsondb.posts);
});

export default router;