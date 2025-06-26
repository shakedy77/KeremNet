import express from 'express';

import jsondb from '../../DBs/db.json'

import PostModel from '../../my-app/src/Models/PostModel/PostModel'
interface Props{
    postModel : PostModel
}



const router = express.Router();

router.get("/", (req, res) => {
  res.send('welcome to kerem server!');
});

router.get("/post/", (req, res) => {
  res.send(jsondb.posts);
});

router.get("/post/:name/", (req, res) => {
  res.send(jsondb.posts.filter(post => post.publisherName === req.params.name))
})

function getUserList(){
  return [...new Set(jsondb.posts.map(post => post.publisherName))]
}

router.get("/user/", (req,res) => {
  res.send(getUserList())
})

router.get("/user/:name/", (req, res) => {
  if (getUserList().includes(req.params.name)){
    res.send(`user ${req.params.name} profile: he is really cool!`)
  }
  else{
    res.send("user does not exist!")
  }
})

export default router;