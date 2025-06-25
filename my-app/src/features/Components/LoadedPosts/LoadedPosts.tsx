import React, { ReactElement } from "react";
import Post from "../Post/Post";
import JsonData from "../../../data/json-server/json-server";
import PostModel from "../../Models/PostModel/PostModel";


const LoadedPosts = ():ReactElement =>{
    const posts = JsonData();
    return <div className="LoadedPosts">
        {(posts as PostModel[]).map((post) => {
            return <Post publisherName={post.publisherName} 
            publishDate={new Date(post.publishDate)} 
            content={post.content} 
            comments={post.comments} 
            likeAmount={post.likeAmount}></Post>
        })}
    </div>
}

export default LoadedPosts;