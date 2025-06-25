import React, { ReactElement } from "react";
import Post from "../Post/Post";
import JsonData from "../../../data/json-server/json-server";
import PostModel from "../../Models/PostModel/PostModel";
import CommentModel from "../../Models/CommentModel/CommentModel";


const LoadedPosts = ():ReactElement =>{
    const posts = JsonData();
    return <div className="LoadedPosts">
        {(posts as PostModel[]).map((post) => {
            return <Post postModel={{ 
             publisherName:post.publisherName,
             content:post.content,
             publishDate:(new Date(post.publishDate)),
             likeAmount:post.likeAmount,
             comments:post.comments} as PostModel}>
            </Post>
        })}
    </div>
}

export default LoadedPosts;