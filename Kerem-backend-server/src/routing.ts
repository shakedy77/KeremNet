import express from 'express';
import { Request, Response } from "express";

import services from './Services';
import PostModel from './models/PostModel/PostModel';

const router = express.Router();


//get methods
router.get("/", (req : Request, res :  Response) : void  => {
  res.send('welcome to kerem server!');
});

router.get("/post/", (req : Request, res :  Response) : void  => {
  res.send(services.getAllPosts());
});

router.get("/post/:name/", (req : Request, res :  Response) : void  => {
  if (req.params.name !== undefined){
    res.send(services.getPostsByName(req.params.name));
  }
  else{
    res.send("invalid parameters!");
  }
})

router.get("/user/", (req : Request, res :  Response) : void => {
  res.send(services.getUserList());
})

router.get("/user/:name/", (req : Request, res :  Response) : void => {
  if (req.params.name !== undefined){
    res.send("invalid parameters!");
  }
  else{
    if (services.getUserList().includes(req.params.name)){
      res.send(`user ${req.params.name} profile: he is really cool!`);
  }
    else{
      res.send("user does not exist!");
  }
  }
})

//post methods
router.post('/post/', (req : Request, res :  Response) : void => {
  const newPost : PostModel = req.body;
  
})

export default router;