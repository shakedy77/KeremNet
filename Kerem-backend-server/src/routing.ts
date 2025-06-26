import express from 'express';
import { Request, Response } from "express";

import jsondb from '../../DBs/db.json'

const router = express.Router();

router.get("/", (req : Request, res :  Response) : void  => {
  res.send('welcome to kerem server!');
});

router.get("/post/", (req : Request, res :  Response) : void  => {
  res.send(jsondb.posts);
});

router.get("/post/:name/", (req : Request, res :  Response) : void  => {
  if (req.params.name !== undefined){
    res.send(jsondb.posts.filter(post => post.publisherName === req.params.name));
  }
  else{
    res.send("invalid parameters!");
  }
  
})

function getUserList() : string[] {
  return [...new Set(jsondb.posts.map(post => post.publisherName))];
}

router.get("/user/", (req : Request, res :  Response) : void => {
  res.send(getUserList());
})

router.get("/user/:name/", (req : Request, res :  Response) : void => {
  if (req.params.name !== undefined){
    res.send("invalid parameters!");
  }
  else{
    if (getUserList().includes(req.params.name)){
      res.send(`user ${req.params.name} profile: he is really cool!`);
  }
    else{
      res.send("user does not exist!");
  }
  }
  
})

export default router;