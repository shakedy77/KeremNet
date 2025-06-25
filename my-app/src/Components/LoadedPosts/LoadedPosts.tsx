import React, { ReactElement } from "react";
import Post from "../Post/Post";
import usePostsJsonData from "../../Hooks/jsonServerHook/usePostsJsonServer";
import PostModel from "../../Models/PostModel/PostModel";

import './LoadedPosts.css'


const LoadedPosts = ():ReactElement =>{

    const posts : PostModel[] = usePostsJsonData();
    return <div className="loaded-posts">
        {posts.map((post) => {
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